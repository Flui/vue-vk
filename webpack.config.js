var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var { version } = require('./package.json');

const plugins = []

// Naming and path settings
function getEntries(pathToEntriepoints, excludes) {
  return fs.readdirSync(pathToEntriepoints)
    .reduce((entries, file) => {
      const name = file.split(".")[0];
      const path = pathToEntriepoints + file;
      if (!excludes || !excludes.includes(name)) {
        entries[name] = path;
      }
      return entries;
    }, {});
}

var exportPath = path.resolve(__dirname, './dist');


// Main Settings config
module.exports = {
  entry: getEntries('./src/components/'),
  output: {
    path: exportPath,
    filename: `[name].js`
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins
};
