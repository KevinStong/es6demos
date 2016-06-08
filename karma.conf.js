// karma.conf.js
module.exports = function(config) {
  config.set({
    client: {
      captureConsole: true
    },
    frameworks: ['jasmine'],
    files: [
    '*.spec.js'
    ],
    basePath: 'app/js/spec',
    reporters: ['html']
  });
};