let target = null;
let initTries = 0;
let modalOpen = false;
const htmlSnippet = `<div><button id="feedback-tool-btn">Feedback Senden</button></div>
<div id="feedback-tool-modal" style="display: none">
<div class="ft-flex ft-justify-center">
<div class="ft-flex ft-align-center">
<label id="feedback-tool-modal-switch">
  <input id="ft-screenshot-check" type="checkbox">
  <span class="slider"></span>
</label>
</div>
<span class="ft-screenshot-text">Screenshot aufnehmen?</span>
</div>
<div class="ft-mt-10">
  <textarea id="ft-content" type="text" class="ft-text-input" rows="5"></textarea>
  <div class="ft-flex ft-justify-end ft-mt-10">
    <button id="ft-abort" class="ft-button">Verwerfen</button>
    <button id="ft-send" class="ft-button">Senden</button>
  </div>
</div>
</div>`;

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
  if (config.secondaryColor) {
    root.style.setProperty('--ft-color-secondary', config.secondaryColor);
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

function openModal() {
  const modal = document.getElementById('feedback-tool-modal');
  modal.style.display = 'block';
  modalOpen = true;
}

function closeModal() {
  const modal = document.getElementById('feedback-tool-modal');
  modal.style.display = 'none';
  modalOpen = false;
}

function toggleModal() {
  if (modalOpen) {
    closeModal();
  } else {
    openModal();
  }
}

function sendFeedback(feedback, config) {
  const takeScreenshot = document.getElementById('ft-screenshot-check').checked;
  let feedbackObj = {
    text: feedback,
    createdAt: new Date(),
    screenshot: takeScreenshot,
    browserInformation: detectBrowserDetails(),
  };
  console.log(config.apiUrl);
  console.log(feedbackObj);
}

function detectBrowserDetails() {
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browserName = navigator.appName;
  var fullVersion = '' + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var nameOffset, verOffset, ix;

  // In Opera, the true version is after "Opera" or after "Version"
  if ((verOffset = nAgt.indexOf('Opera')) != -1) {
    browserName = 'Opera';
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf('Version')) != -1) fullVersion = nAgt.substring(verOffset + 8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
    browserName = 'Microsoft Internet Explorer';
    fullVersion = nAgt.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome"
  else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
    browserName = 'Chrome';
    fullVersion = nAgt.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
    browserName = 'Safari';
    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf('Version')) != -1) fullVersion = nAgt.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox"
  else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
    browserName = 'Firefox';
    fullVersion = nAgt.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(';')) != -1) fullVersion = fullVersion.substring(0, ix);
  if ((ix = fullVersion.indexOf(' ')) != -1) fullVersion = fullVersion.substring(0, ix);

  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }
  return {
    browserName,
    fullVersion,
    majorVersion,
    appName: navigator.appName,
    userAgent: navigator.userAgent,
  };
}
