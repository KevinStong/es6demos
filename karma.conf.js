// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
    '*.spec.js'
    ],
    basePath: 'app/js/spec',
    reporters: ['html']
  });
};