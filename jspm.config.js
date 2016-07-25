SystemJS.config({
    paths: {
        "npm:": "jspm_packages/npm/"
    },
    baseURL: "/",
    devConfig: {
        "map": {
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
        }
    },
    transpiler: "plugin-babel",
    packages: {
        "app": {
            "main": "index.js",
            "meta": {
                "*.js": {
                    "loader": "plugin-babel"
                }
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json"
    ],
    map: {},
    packages: {}
});
