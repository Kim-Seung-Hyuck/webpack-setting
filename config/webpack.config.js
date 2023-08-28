const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    hot: true,
    // 핫 리프레쉬 허용
    open: true,
    // 데브 서버 시작시 브라우저 실행 옵션
    compress: true,
    host: 'localhost',
    port: 3000,
    // 개발기 우회
    allowedHosts: ['all'],
    historyApiFallback: true,
    liveReload: true,
    client: {
      overlay: {
        errors: false,
        runtimeErrors: false,
        warnings: false,
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(c|sc)ss$/,
        use: ['style-loader', 'css-loader', 'scss-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // 이미지 확장자 추가
        use: [
          {
            loader: 'file-loader', // 파일 로더를 사용하여 이미지 처리
            options: {
              name: '[name].[ext]', // 파일 이름 유지
              outputPath: 'images/', // 번들된 이미지 파일이 저장될 경로
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  plugins: [
    // 컴포넌트들 중 진짜 변경값이 있는 것만 랜더 일어 나도록 하는 hot refresh 플러그 인이다.
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/public/index.dev.html'),
      filename: '../index.html',
      publicPath: '',
    }),
  ],
};
