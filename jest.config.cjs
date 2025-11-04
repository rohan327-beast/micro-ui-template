/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // --- Your existing base configuration ---
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // --- CI Reporting Configuration (Merged) ---

  // 1. Specifies the output directory for coverage files.
  coverageDirectory: 'coverage',

  // 2. Tells Jest to collect coverage information during tests.
  collectCoverage: true,

  // 3. Defines the formats for the coverage report.
  // 'lcov' is for SonarCloud.
  // 'cobertura' is for Azure DevOps native coverage reporting.
  coverageReporters: ['lcov', 'cobertura'],

  // 4. Defines the test reporters.
  // 'default' keeps the standard console output.
  // 'jest-junit' creates an XML file that Azure DevOps uses to display detailed test results.
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'coverage', outputName: 'junit.xml' }],
  ],

  // --- Module Mappers (Merged) ---
  moduleNameMapper: {
    // Your existing mappers
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',

    // Added from the CI example: mocks for image files to prevent test errors.
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
