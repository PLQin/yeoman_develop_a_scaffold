// import gulp from 'gulp'
// import pug from 'gulp-pug'
// import rename from 'gulp-rename'
const gulp = require('gulp')
const pug = require('gulp-pug')
const rename = require('gulp-rename')
const pugFiles = 'pages/**/*.pug'

// 通用的 pug 处理，可以把 pug 转译并改名为 .wxml 文件
async function doPUG(path) {
  gulp.src(path)
    .pipe(pug())
    .pipe(rename({
      extname: '.wxml',
    }))
    .pipe(gulp.dest('./pages'));
}

// 将所有 pug 进行转译
gulp.task('pug', async () => {
  return doPUG(pugFiles); 
});

// 侦听 .pug 文件的变化，并转译被修改的
gulp.task('watch', ['pug'], () => {
  gulp.watch(pugFiles, ({path}) => {
    doPUG(path);
  });
});