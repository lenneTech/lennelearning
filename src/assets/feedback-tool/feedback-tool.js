let target = null;
let initTries = 0;
let modalOpen = false;
let timeout = null;
const htmlSnippet = `
<div data-html2canvas-ignore="true"><button id="feedback-tool-btn">Feedback Senden</button></div>
<div id="feedback-tool-modal" style="display: none" data-html2canvas-ignore="true">
  <div id="feedback-tool-interface">
    <div class="ft-flex ft-justify-center">
      <div class="ft-flex ft-align-center">
        <label id="feedback-tool-modal-switch">
          <input id="ft-screenshot-check" type="checkbox">
          <span class="slider"></span>
        </label>
      </div>
       <span class="ft-screenshot-text">Screenshot aufnehmen?</span>
       <div class="sk-folding-cube" id="ft-loader" style="display:none">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div>
    </div>
    <div class="ft-mt-10">
      <textarea id="ft-content" placeholder="Hast du ein Problem oder einen Vorschlag für diese Seite?\nLass es uns wissen :)" oninput="checkTextarea()" type="text" class="ft-text-input" rows="5"></textarea>
      <div class="ft-flex ft-justify-end ft-mt-10">
        <button id="ft-abort" class="ft-button">Verwerfen</button>
        <button id="ft-send" class="ft-button primary">Senden</button>
      </div>
    </div>
  </div>
  <div class="ft-text-success" id="feedback-tool-success">
     <span class="ft-response-icon">✅</span>  Feedback erfolgreich versendet!
  </div>
  <div class="ft-text-error" id="feedback-tool-error">
     <span class="ft-response-icon">❌</span>  Upps, da ist etwas schief gelaufen...
  </div>
</div>
`;

function initFeedbackTool(config) {
  setTimeout(function () {
    target = document.getElementById('feedback-tool');
    if (target) {
      console.log('Feedback Tool successfully initialized');
      target.innerHTML = htmlSnippet;
      initStyling(config);
      initBtnClickEvents(config);
    } else {
      if (initTries < 10) {
        initTries++;
        initFeedbackTool(config);
      } else {
        console.error('Feedback Tool could not be initialized: Could not find target Element');
      }
    }
  }, 50);
}

function initStyling(config) {
  const root = document.documentElement;
  if (config.primaryColor) {
    root.style.setProperty('--ft-color-primary', config.primaryColor);
  }
}

function initBtnClickEvents(config) {
  const btn = document.getElementById('feedback-tool-btn');
  const send = document.getElementById('ft-send');
  const abort = document.getElementById('ft-abort');
  const content = document.getElementById('ft-content');
  btn.addEventListener('click', function () {
    toggleModal();
  });
  send.addEventListener('click', function () {
    sendFeedback(content.value, config);
  });
  abort.addEventListener('click', function () {
    closeModal();
  });
}

function checkTextarea() {
  const send = document.getElementById('ft-send');
  const content = document.getElementById('ft-content');
  send.disabled = !content.value;
}

function openModal() {
  const modal = document.getElementById('feedback-tool-modal');
  modal.style.display = 'block';
  openInterface();
  resetTimeout();
  resetTextArea();
  modalOpen = true;
}

function closeModal() {
  const modal = document.getElementById('feedback-tool-modal');
  modal.style.display = 'none';
  openInterface();
  modalOpen = false;
}

function toggleModal() {
  if (modalOpen) {
    closeModal();
  } else {
    openModal();
  }
}

function resetTextArea() {
  const content = document.getElementById('ft-content');
  content.value = '';
  checkTextarea();
}

function toggleLoader() {
  const loader = document.getElementById('ft-loader');
  if (loader.style.display === 'none') {
    loader.style.display = 'block';
  } else {
    loader.style.display = 'none';
  }
}

function openSuccess() {
  const interfaceDiv = document.getElementById('feedback-tool-interface');
  const success = document.getElementById('feedback-tool-success');
  success.style.display = 'block';
  interfaceDiv.style.display = 'none';
  closeAfterSeconds();
}

function openError() {
  const interfaceDiv = document.getElementById('feedback-tool-interface');
  const error = document.getElementById('feedback-tool-error');
  error.style.display = 'block';
  interfaceDiv.style.display = 'none';
  closeAfterSeconds();
}

function closeAfterSeconds() {
  timeout = setTimeout(function () {
    closeModal();
  }, 5000);
}

function resetTimeout() {
  if (timeout) {
    clearTimeout(timeout);
  }
}

function openInterface() {
  const interfaceDiv = document.getElementById('feedback-tool-interface');
  interfaceDiv.style.display = 'block';
  const success = document.getElementById('feedback-tool-success');
  success.style.display = 'none';
  const error = document.getElementById('feedback-tool-error');
  error.style.display = 'none';
}

async function sendFeedback(feedback, config) {
  toggleLoader();
  const screenshotTaken = document.getElementById('ft-screenshot-check').checked;
  let feedbackObj = {
    text: feedback,
    createdAt: new Date(),
    screenshot: screenshotTaken,
    browserInformation: detectBrowserDetails(),
    screenWidth: screen.width,
    screenHeight: screen.height,
    url: window.window.location.href,
  };
  if (screenshotTaken) {
    feedbackObj.files = [await takeScreenshot()];
  }
  sendToApi(feedbackObj, config.apiUrl).then(function (success) {
    toggleLoader();
    if (success) {
      openSuccess();
    } else {
      openError();
    }
  });
}

function takeScreenshot() {
  return new Promise(async function (resolve, reject) {
    const canvas = await html2canvas(document.body, { height: screen.height });
    const base64 = canvas.toDataURL('image/png', 1.0);
    resolve({
      filename: 'screenshot.png',
      content: base64.split(',')[1],
      encoding: 'base64',
    });
  });
}

function sendToApi(obj, apiUrl) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl, true);

    xhr.onload = function () {
      resolve(true);
    };
    xhr.onerror = function () {
      console.error('Server Error');
      resolve(false);
    };
    xhr.ontimeout = function () {
      console.error('Connection Timeout');
      resolve(false);
    };
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(obj));
  });
}

function detectBrowserDetails() {
  const nVer = navigator.appVersion;
  const nAgt = navigator.userAgent;
  let browserName = navigator.appName;
  let fullVersion = '' + parseFloat(navigator.appVersion);
  let majorVersion = parseInt(navigator.appVersion, 10);
  let nameOffset, verOffset, ix;

  // In Opera, the true version is after "Opera" or after "Version"
  if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
    browserName = 'Opera';
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf('Version')) !== -1) fullVersion = nAgt.substring(verOffset + 8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
    browserName = 'Microsoft Internet Explorer';
    fullVersion = nAgt.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome"
  else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
    browserName = 'Chrome';
    fullVersion = nAgt.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
    browserName = 'Safari';
    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf('Version')) !== -1) fullVersion = nAgt.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox"
  else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
    browserName = 'Firefox';
    fullVersion = nAgt.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() === browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(';')) !== -1) fullVersion = fullVersion.substring(0, ix);
  if ((ix = fullVersion.indexOf(' ')) !== -1) fullVersion = fullVersion.substring(0, ix);

  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }
  return {
    browserName,
    fullVersion,
    userAgent: navigator.userAgent,
  };
}
