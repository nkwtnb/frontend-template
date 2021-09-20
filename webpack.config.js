const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      ie: "11",
                    },
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
                ['@babel/preset-typescript'],
              ],
            },
          },
        ],
      },
    ],
  },
  target: ["web", "es5"],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
