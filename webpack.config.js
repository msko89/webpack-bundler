const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// resolve(a,b): a와 b의 경로를 합쳐준다.
// __dirname: webpack.config.js 파일이 있는 경로
module.exports = {
  entry: './js/main.js', // 파일을 읽어들이기 시작하는 진입점 설정
  output: {
    // 결과물(번들)을 반환하는 설정
    // path: path.resolve(__dirname, 'dist'), // nodejs에서 요구하는 절대경로로 지정
    // filename: 'main.js', // 빌드 파일명
    clean: true, // 재빌드 시, 필요없는 파일들 제거
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],
  devServer: {
    host: 'localhost',
  },
};
