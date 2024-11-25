/* eslint-disable import/no-anonymous-default-export */
import { pathsToModuleNameMapper } from "ts-jest";
import { readFileSync } from "fs";
import { parse } from "jsonc-parser";

const compilerOptions = parse(
  readFileSync("./tsconfig.json", "utf-8")
).compilerOptions;

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        isolatedModules: true,
      },
    ],
  },
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/app/**/*.ts"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  verbose: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};
