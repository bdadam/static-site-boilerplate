module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "worker": true,
        "mocha": true,
        "jasmine": true,
        "jquery": true,
        "serviceworker": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        // "quotes": [
        //     "error",
        //     "single",
        //     { "allowTemplateLiterals": true }
        // ],
        "no-console": 0,
        "semi": [
            "error",
            "always"
        ]
    }
};