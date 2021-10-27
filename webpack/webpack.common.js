const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss'],
    alias: {
      '@Asset': path.resolve(__dirname, '../src/asset/'),
      '@App': path.resolve(__dirname, '../src/app/'),
      '@Components': path.resolve(__dirname, '../src/app/components/'),
      '@Pages': path.resolve(__dirname, '../src/app/pages/'),
      '@Services': path.resolve(__dirname, '../src/app/services/'),
      '@Styles': path.resolve(__dirname, '../src/app/styles/'),
      '@Features': path.resolve(__dirname, '../src/app/features/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new CopyPlugin({
      patterns: [{ from: 'source', to: 'dest', noErrorOnMissing: true }]
    })
  ]
}
