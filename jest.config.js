module.exports = {
  transform: {
    ".(js|jsx|ts|tsx)": "@sucrase/jest-plugin",
  },
  //preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["jest-extended"],
};
