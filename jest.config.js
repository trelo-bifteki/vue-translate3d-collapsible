module.exports = {
  moduleFileExtensions: [
    `js`,
    `jsx`,
    `json`,
    `vue`,
  ],
  transform: {
    '^.+\\.vue$': `vue-jest`,
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': `jest-transform-stub`,
    '^.+\\.jsx?$': `babel-jest`,
  },
  moduleNameMapper: {
    '^@/(.*)$': `<rootDir>/src/$1`,
  },
  snapshotSerializers: [
    `jest-serializer-vue`,
  ],
  testMatch: [
    `**/*.spec.js`,
  ],
  reporters: [
    'default',
    'jest-junit'
  ],
  coverageReporters: [
    'text',
    'cobertura'
  ],
  testURL: `http://localhost/`,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.vue',
    'src/**/*.js',
    '!**/node_modules/**',
    '!test/**',
    '!dist/**'
  ],
  coverageDirectory: "./coverage",
};
