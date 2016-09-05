const path = require('path')
module.exports = {
  output: {
    path: path.join(__dirname, 'build'),
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader'],
      },
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
    "react-bootstrap": "ReactBootstrap",
    "redux": "Redux",
    "react-redux": "ReactRedux",
    "redux-actions": "ReduxActions",
    "redux-thunk": "ReduxThunk",
    "immutable": "Immutable",
    "jquery": "jQuery",
    "mustache": "Mustache",
    "lodash": "_",
    "google": "google",
  }
}
