import type { JestConfigWithTsJest } from "ts-jest";
import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const MIN_COVERAGE = 80;

const config: JestConfigWithTsJest = {
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
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};

export default config;
