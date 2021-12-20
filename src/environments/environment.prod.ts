export const environment = {
  name: 'prod',
  production: true,
  prefix: 'academy-prod',
  apiUrl: '',
  matomoConfig: {
    scriptUrl: '//analytics.lenne.tech/matomo.js',
    trackers: [
      {
        trackerUrl: 'https://analytics.lenne.tech/matomo.php',
        siteId: 1,
      },
    ],
    routeTracking: {
      enable: true,
    },
  },
  appUrl: 'https://akademie.lenne.tech/',
  webHook: 'https://hooks.slack.com/services/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',
};
