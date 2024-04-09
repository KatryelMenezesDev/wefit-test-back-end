export default {
  bail: true,

  clearMocks: true,

  collectCoverage: true,

  testEnvironment: "node",

  collectCoverageFrom: ["src/modules/**/*.ts"],

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  preset: "ts-jest",

  moduleNameMapper: {
    "^@config/(.*)$": "<rootDir>/src/config/$1",
    "^@modules/(.*)$": "<rootDir>/src/modules/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1"
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  testMatch: ["**/**/*.spec.ts"]
};
