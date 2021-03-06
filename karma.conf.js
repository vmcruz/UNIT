function grep(argv) {
  let found = false;
  return argv.filter((a) => {
    if (found) return a;
    if (a === '--') found = true;
    return false;
  });
}

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './src/unit.js',
      './src/test/helper/fixtures.js',
      './src/test/helper/requiredError.js',
      ...grep(process.argv),
    ],
    reporters: ['spec', 'coverage'],
    colors: true,
    browsers: ['ChromeHeadless'],
    preprocessors: {
      './src/*.js': 'coverage',
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text' },
      ],
    },
    specReporter: {
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false,
      showSpecTiming: true,
      failTest: true,
    },
    logLevel: config.LOG_INFO,
    singleRun: true,
  });
};
