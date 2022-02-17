module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache',
  moduleNameMapper: {
    '^krisemm/apps/(.*)$': '<rootDir>src/apps/$1',
    '^krisemm/contexts/(.*)$': '<rootDir>src/contexts/$1',
    '^krisemm/tests/(.*)$': '<rootDir>tests/$1'
  }
};
