var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		ftp            = require('vinyl-ftp'),
		notify         = require("gulp-notify"),
		rsync          = require('gulp-rsync');
var 	cssunit 		= require('gulp-css-unit');	
var 	postcss = require('gulp-postcss');
var 	pxtorem = require('postcss-pxtorem');
var 	pump = require('pump');

var processors = [
        pxtorem({
            replace: true,
            selectorBlackList: ['max-width'],
            rootValue: 16,
            propList: ['font', 'width', 'height', 'font-size', 'line-height', 'letter-spacing']
        })
    ];
gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/js/scripts.js'),
        uglify(),
        gulp.dest('app/js')
    ],
    cb
  );
});
gulp.task('js', function () {
    return browserify({entries: 'app/js/common.js', extensions: ['.js'], debug: true})
        .transform('babelify')
        .bundle()
        .pipe(source('scripts.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	//.pipe(postcss(processors))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img')); 
});

gulp.task('build', ['imagemin', 'sass', 'compress'], function() {

	var buildFiles = gulp.src([
		'app/*.html',
		'app/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/js/scripts.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});


gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload);
});
gulp.task('default', ['watch']);