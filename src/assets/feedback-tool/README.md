Just add the following Javascript Snippet to your index.html:

  <script rel="script" src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

// Will be later uploaded on our server but until then you have to embed it manually

  <script rel="script" src="[source of feedback-tool.js]"></script>
  <link rel="stylesheet" href="[source of feedback-tool.css]"/>
  <script type="text/javascript">
      initFeedbackTool({ apiUrl: '[url of your api]', primaryColor: '[Hex Code of your primary Color]' });
  </script>
