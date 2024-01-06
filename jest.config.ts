import type { Config } from "jest";

const MIN_COVERAGE = 80;

const config: Config = {
  coverageThreshold: {
    global: {
      statements: MIN_COVERAGE,
      branches: MIN_COVERAGE,
      functions: MIN_COVERAGE,
      lines: MIN_COVERAGE,
    },
  },
  transform: {
    "^.+\\.(t|j)s$": "@swc/jest",
  },
  testEnvironment: "node",
  cacheDirectory: ".tmp/jestCache",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  setupFiles: ["<rootDir>.jest/set-env-vars.ts"],
  clearMocks: true,
};

export default config;