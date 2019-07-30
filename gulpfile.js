const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

// webpackの設定ファイルを読み込み
const webpackConfig = require('./config/webpack.config');

// webpackを用いたスクリプトのコンパイル
gulp.task('script', () =>
  webpackStream(webpackConfig, webpack)
    // ファイルを出力
		.pipe(gulp.dest('dist/script'))
);

// 監視と処理の自動化
gulp.task('default', () => {
  gulp.watch('src/script/**/*.es6', gulp.task('script'));
});