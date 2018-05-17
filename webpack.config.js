const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'source')
}

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 * https://github.com/FullHuman/purgecss-webpack-plugin
 */
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  entry: {
    site: __dirname + '/source/javascript/site.js'
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("assets/[name].css"),
    // new PurgecssPlugin({
    //   paths: () => glob.sync(`${PATHS.src}/**/*{html,js}*`),
    //   extractors: [
    //     {
    //       extractor: TailwindExtractor,
    //       extensions: ["html", "js", "slim", "erb"]
    //     }
    //   ]
    // })
  ],
};
