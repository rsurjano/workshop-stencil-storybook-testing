const config = {
  preset: '@stencil/core/testing',
  verbose: true,
  coveragePathIgnorePatterns: ['node_modules'],
  collectCoverageFrom: [
    'architecture/src/components/**/*.{js,jsx,ts,tsx}',
    '!architecture/src/components/**/*.helpers.{js,jsx,ts,tsx}',
    '!architecture/src/components/**/*.{d,e2e}.{js,jsx,ts,tsx}',
    '!architecture/src/components/story.utils.ts',
  ],
  collectCoverage: true,
  coverageDirectory: 'documentation/coverage',
  coverageReporters: ['text', 'html', 'json', 'lcov'],
  errorOnDeprecated: true,
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 9,
      lines: 10,
      statements: 10,
    },
  },
  watchPathIgnorePatterns: ['<rootDir>/documentation'],
  reporters: [
  ],
};
module.exports = config;
