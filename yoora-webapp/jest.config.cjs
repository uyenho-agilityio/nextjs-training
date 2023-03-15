module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/index.{js,ts}',
    '!**/*.d.ts',
    '!**/.storybook/**',
    '!**/*.stories.{jsx,tsx}',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/coverage/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/*.ts',
    '!<rootDir>/pages/**',
    '!<rootDir>/models/**',
    '!<rootDir>/themes/**',
  ],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '@next/font/(.*)': require.resolve('next/dist/build/jest/__mocks__/nextFontMock.js'),
    '^.+\\.module\\.(css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'test-file-stub',
    '^@webapp/(.*)$': '<rootDir>/$1',
  },
};
