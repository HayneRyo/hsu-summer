module.exports = {
  // 起動モード
  mode: "development",
  // エントリーポイント
  entry: "./src/script/index.jsx",
  // 出力設定
  output: {
    // 出力ファイル名
    filename: "application.js",
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.es6$/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        },
      },
      {
        test: /\.pug/,
        use: ['pug-plain-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      },
    ]
  },
  // プラグイン設定
  plugins: [
  ],
};
