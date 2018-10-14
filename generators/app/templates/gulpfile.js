// import gulp from 'gulp'
// import pug from 'gulp-pug'
// import rename from 'gulp-rename'
const gulp = require('gulp')
const rename = require('gulp-rename') // 重命名

const pug = require('gulp-pug')
const pugFiles = 'pages/**/*.pug'

const stylus = require('gulp-stylus')
const stylFiles = 'pages/**/*.styl'

// 通用的 pug 处理，可以把 pug 转译并改名为 .wxml 文件
async function doPUG(path) {
  gulp.src(path)
    .pipe(pug())
    .pipe(rename({
      extname: '.wxml',
    }))
    .pipe(gulp.dest('./pages'));
}

// 通用的 styl 处理，可以把 styl 转译并改名为 .wxss 文件
async function doSTYL(path) {
  gulp.src(path)
    .pipe(stylus())
    .pipe(rename({
      extname: '.wxss',
    }))
    .pipe(gulp.dest('./pages'));
}

// 将所有 pug 进行转译
gulp.task('pug', async () => {
  return doPUG(pugFiles);
});

// 将所有 stylus 进行转译
// 这个必须要的, 和下面的 gulp.task 相呼应的
gulp.task('stylus', async () => {
  return doSTYL(stylFiles);
});

// 侦听 .pug 文件的变化, 并转译被修改的
// 配置grunt的stylus任务, 并转译被修改的
gulp.task('watch', ['pug', 'stylus'], () => {
  gulp.watch(pugFiles, ({ path }) => {
    doPUG(path);
  });

  gulp.watch(stylFiles, ({ path }) => {
    doSTYL(path);
  });
});