const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const autoprefixer =require('gulp-autoprefixer');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

// webpackの設定ファイルを読み込み
const webpackConfig = require('./config/webpack.config');

// Scriptのコンパイル
gulp.task('script', () =>
  webpackStream(webpackConfig, webpack)
    // ファイルを出力
		.pipe(gulp.dest('dist/script'))
);

// Styleのコンパイル
gulp.task('sass', () =>
  gulp.src('src/sass/**/*.sass')
    .pipe(sass({outputStyle: 'expanded'}))
    // ベンダープレフィックスの付与
    .pipe(autoprefixer({
      // browsers: ["last 2 versions"],
      cascade: false
    }))
    // ファイル名の変更
    .pipe(rename({extname: '.min.css'}))
    // 圧縮する
    .pipe(minifyCss({advanced:false}))
    // ファイルを出力
    .pipe(gulp.dest('dist/css'))
);

// Templateのコンパイル
gulp.task('pug', () =>
  gulp.src('src/pug/**/*.pug')
    // HTMLを生成
    .pipe(pug({
      pretty: true,
    }))
    // ファイルを出力
    .pipe(gulp.dest('dist/'))
);

gulp.task('server', (done) => {
  browserSync.init({
    server: {
      baseDir: "dist/",
      index  : "index.html"
    }
  });
  done();
});

gulp.task('browser-reload', (done) => {
  browserSync.reload();
  done();
});

// 監視と処理の自動化
gulp.task('watch', () => {
  gulp.watch('src/script/**/*.es6', gulp.task('script'));
  gulp.watch('src/script/**/*.vue', gulp.task('script'));
  gulp.watch('src/sass/**/*.sass', gulp.task('sass'));
  gulp.watch('src/pug/**/*.pug', gulp.task('pug'));
  gulp.watch('dist/**/*', gulp.task('browser-reload'));
});

gulp.task('default', gulp.series(gulp.parallel('script', 'sass', 'pug'), 'server', 'watch'));