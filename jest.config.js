/* eslint-env node */

// Pro Hacker Move
process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

module.exports = {
    moduleFileExtensions: [ "js", "jsx", "json", "vue", "ts", "tsx" ],
    moduleNameMapper: { "\\.(css|less|scss|sass)$": "jest-transform-css" },
    transform: {
        "^.*\\.(vue)$": "vue-jest",
        ".+\\.(svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
        ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest"
    },
    transformIgnorePatterns: [ "<rootDir>/node_modules/" ],
    setupFiles: [ "jest-canvas-mock", "<rootDir>/tests/unit/jest.init.js" ],
    snapshotSerializers: [ "jest-serializer-vue" ],
    testMatch: [ "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)" ],
    testURL: "http://localhost/",
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ],
    globals: {
        "ts-jest": { babelConfig: true },
        // HACK: These are used to make the footer unit test pass due
        // to the use of webpack DefinePlugin
        "VERSION": "1.1.1",
        "COMMIT_HASH": "placeholderhash",
        "HEDERA_NETWORK": "testnet",
        "MHW_ENV": "sandbox",
        "CARBON_API_KEY": "89fa28dd-b26e-4af4-8313-1536054767d5",
        "IS_ELECTRON": false
    }
};
