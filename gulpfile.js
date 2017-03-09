'use strict';

var gulp=require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
var concat=require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('copy',function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('less',function(){
	gulp.src('src/*.less')
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('concat',function(){
	gulp.src('src/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('dist',function(){
	gulp.watch('src/01.html',['copy']); 
	gulp.watch('src/*.less',['less']);
	gulp.watch('src/*.js',['js']);
});