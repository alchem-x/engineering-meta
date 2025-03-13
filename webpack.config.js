import { resolve } from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'

const RESOURCE_QUERY = {
  RAW: /raw/,
  NOT_RAW: /^((?!raw).)*$/,
}

const config = {
  mode: 'development',
  entry: {
    main: resolve(import.meta.dirname, 'src/main.js'),
  },
  module: {
    rules: [
      {
        resourceQuery: RESOURCE_QUERY.RAW,
        type: 'asset/source',
      },
      {
        resourceQuery: RESOURCE_QUERY.NOT_RAW,
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        resourceQuery: RESOURCE_QUERY.NOT_RAW,
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        resourceQuery: RESOURCE_QUERY.NOT_RAW,
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        resourceQuery: RESOURCE_QUERY.NOT_RAW,
        test: /\.[jt]sx?$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
              plugins: ['@emotion', '@vue/babel-plugin-jsx'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(import.meta.dirname, 'src/index.html'),
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  output: {
    iife: true,
    filename: '[name].js',
  },
  performance: {
    maxEntrypointSize: 1024 * 1024,
    maxAssetSize: 1024 * 1024,
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: 'all',
    host: 'localhost',
    liveReload: true,
    hot: true,
  },
}

export default function defineConfig(env) {
  return config
}
