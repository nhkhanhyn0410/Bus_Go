/** @type {import('jest').Config} */
const config = {
  // Môi trường test cho Node.js backend
  testEnvironment: 'node',

  // Thư mục root
  rootDir: '.',

  // Pattern tìm file test - chỉ JavaScript
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],

  // Bỏ qua các thư mục
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],

  // Module paths
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Coverage - chỉ JavaScript files
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.test.js', '!src/**/*.spec.js'],

  // Coverage thresholds (tuỳ chọn)
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};

export default config;
