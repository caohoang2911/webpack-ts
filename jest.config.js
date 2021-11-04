const { compilerOptions } = require('./base.json');
module.exports = {
  roots: ['<rootDir>/src'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '^@reducers/(.*)$': '<rootDir>/src/store/reducers/$1',
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  verbose: true,
  
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
