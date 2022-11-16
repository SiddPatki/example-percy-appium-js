exports.config = {
  user: process.env.AA_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.AA_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    './android/specs/test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First App Percy Project",
    build: 'App Percy Webdriverio Android',
    name: 'first_visual_test',
    device: 'Google Pixel 6',
    os_version: "12.0",
    app: process.env.APP || 'bs://<hashed app-id>'
  }],

  logLevel: 'info',
  coloredLogs: true,
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};
