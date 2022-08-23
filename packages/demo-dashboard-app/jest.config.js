module.exports = {
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
    "@roam/demo-dashboard-utilities":
      "<rootDir>/__mocks__/demo-dashboard-utilities.tsx",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
