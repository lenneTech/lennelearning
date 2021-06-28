import 'zone.js/node';

import * as express from 'express';
import { join } from 'path';

import * as compression from 'compression';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { ngFlavrHubExpressEngine } from './ssr-cache';
import { ngExpressEngine } from '@nguniversal/express-engine';
//import { ngFlavrHubExpressEngine } from './ssr-cache';
// import { MailHelper } from './server/mail-helper';

// ----------------------------------------------
// window for image lazy loading
// ----------------------------------------------
/* eslint-disable */
const domino = require('domino');
const fs = require('fs');
const template = fs.readFileSync(join(__dirname, '../browser', 'index.html')).toString();
const win = domino.createWindow(template);
global['window'] = win;
global['document'] = win.document;
/* eslint-enable */
// ----------------------------------------------

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const server = express();
  const distFolder = join(__dirname, '../browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  server.use(compression());

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // // Options
  // server.options('*', (req, res) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Request-Method', '*');
  //   res.setHeader('Access-Control-Allow-Methods', '*');
  //   res.setHeader('Access-Control-Allow-Headers', '*');
  //   res.writeHead(200);
  //   res.end();
  // });

  // // Process messages
  // server.use(express.json());
  // server.post('/api/messages/add', (req, res) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Request-Method', '*');
  //   res.setHeader('Access-Control-Allow-Methods', '*');
  //   res.setHeader('Access-Control-Allow-Headers', '*');
  //   MailHelper.processMessage(req, res);
  // });

  // Example Express Rest API endpoints
  // app.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
