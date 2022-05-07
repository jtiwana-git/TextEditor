const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file. DONE
// TODO: Add CSS loaders and babel to webpack. DONE

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      }),
      new WorkboxPlugin.GenerateSW(),
      new InjectManifest({
        swSrc: './client/src-sw.js',
        swDest: 'service-worker.js',
      }),
      new WebpackPwaManifest ({
        name: 'Todos',
        short_name: 'Todos',
        description: "To store ALL of your Todo's",
        icons: [
          {
            src: path.join('assets', 'images', 'logo.png'),
            size: [96, 128, 256, 512], 
          },
        ],
        start_url: '/',
        theme_color: '#C0C0C0',
        background_color: '#000000',

      }),
      
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
    },
   
      ],
    },
  };
};
