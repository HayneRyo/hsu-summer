const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 起動モード
  mode: "development",
  // エントリーポイント
  entry: "./src/script/application.es6",
  // 出力設定
  output: {
    // 出力ファイル名
    filename: "application.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.es6$/,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
        ]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
    ]
  },
  // プラグイン設定
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
};