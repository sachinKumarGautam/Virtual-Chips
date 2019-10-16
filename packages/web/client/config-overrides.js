const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// our packages that will now be included in the CRA build step
const appIncludes = [resolveApp("src"), resolveApp("../components/src")];

module.exports = function override(config, env) {
    // allow importing from outside of src folder
    config.resolve.plugins = config.resolve.plugins.filter(
        plugin => plugin.constructor.name !== "ModuleScopePlugin"
    );
    //   config.module.rules[0].include = appIncludes
    //   config.module.rules[1] = null
    //   config.module.rules[2].oneOf[1].include = appIncludes
    //   config.module.rules[2].oneOf[1].options.plugins = [
    //     require.resolve('babel-plugin-react-native-web'),
    //   ].concat(config.module.rules[2].oneOf[1].options.plugins)
    config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
        use: {
            loader: "babel-loader",
            options: {
                // Disable reading babel configuration
                babelrc: false,
                configFile: false,

                // The configration for compilation
                presets: [
                    ["@babel/preset-env", { useBuiltIns: "usage" }],
                    "@babel/preset-react",
                    "@babel/preset-flow"
                ],
                plugins: [
                    "@babel/plugin-proposal-class-properties",
                    "@babel/plugin-proposal-object-rest-spread",
                    "babel-plugin-react-native-web"
                ]
            }
        }
    });
    config.module.rules = config.module.rules.filter(Boolean);
    config.plugins.push(
        new webpack.DefinePlugin({ __DEV__: env !== "production" })
    );
    return config;
};
