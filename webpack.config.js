const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: "./public/index.js",
    output: {
      path: __dirname + "/public/dist",
      filename: "bundle.js"
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        }
      ]
    },
    plugins: [
      new WebpackPwaManifest({
        name: "budget-tracker",
        short_name: "$Tracker",
        description: "Keeps track of deposits and withdrawels made and charts the progress of your expenses. Can be used offline as a progressive web application",
        background_color: "#01579b",
        theme_color: "#ffffff",
        "theme-color": "#ffffff",
        start_url: "/",
        icons: [
          {
            src: path.resolve("./public/icons/icon-192x192.png"),
            sizes: [192, 512],
            destination: path.join("assets", "icons")
          }
        ]
      })
    ],

};

module.exports = config;
  