const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'client/src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    modules: ["node_modules",path.resolve(__dirname, "app")],
    extensions: [".jsx", ".js", ".json", ".css"]
  }
}