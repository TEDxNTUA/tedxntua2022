const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const DEV_MODE = process.env.NODE_ENV !== 'production'

let fromRoot = (...args) => {
  // Go back two directories
  return path.join('..', '..', ...args)
}

module.exports = {
  context: __dirname,
  entry: {
    main: fromRoot('assets/js/index.js'),
    nav: fromRoot('assets/js/nav.js'),
    home: fromRoot('project/home/assets/js/home.js'),
    schedule: fromRoot('project/program/assets/js/schedule.js'),
    about: fromRoot('project/about/assets/js/about.js'),
    listing: fromRoot('project/program/assets/js/listing.js'),
    partners: fromRoot('project/partners/assets/js/partners.js'), 
    
  },
  module: {
    rules: [{
      // Extract CSS into separate files.
      // Adapted from https://github.com/webpack-contrib/sass-loader#in-production
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader', 
      ]
    },
    {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              outputPath: 'fonts/', 
              esModule: false
            }
          }
        ]
    }]
  },
  plugins: [],
  resolve: {
    alias: {
      // This enables us to use imports like
      // import "@/privacy/assets/js/main.js"
      // that point to the project/ directory.
      '@': path.resolve('../project')
    },
    modules: [
      // Use an absolute path for node_modules
      // Otherwise asset files would only search
      // in their own and parent directories.
      // https://webpack.js.org/configuration/resolve/#resolve-modules
      path.resolve('./node_modules')
    ]
  }
}
