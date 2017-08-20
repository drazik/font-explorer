const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                "transform-class-properties",
                ["transform-react-jsx", { "pragma": "h" }],
                "emotion/babel"
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      react: "preact"
    }
  },
  target: "electron-renderer"
}
