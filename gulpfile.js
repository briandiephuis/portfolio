var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    jshint     = require('gulp-jshint'),
    ts         = require('gulp-typescript'),
    sass       = require('gulp-sass'),
    concat     = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    notify     = require("gulp-notify"),
    bower      = require('gulp-bower'),
    
    config = {
      bowerDir: './bower_components'
    },

    input  = {
      'sassPath': 'source/styles',
      'sass': 'source/styles/**/*.scss',
      'typescript': 'source/scripts/**/*.ts',
      'vendorjs': 'source/scripts/vendor/**/*.js'
    },

    output = {
      'stylesheets': 'built/assets/stylesheets',
      'javascript': 'built/assets/javascript'
    };

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['watch']);
gulp.task('build', ['css', 'typescript']);

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./built/fonts'));
});

/* run javascript through jshint */
gulp.task('jshint', function() {
  return gulp.src(input.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// /* compile scss files */
// gulp.task('build-css', function() {
//   return gulp.src('source/scss/**/*.scss')
//     .pipe(sourcemaps.init())
//       .pipe(sass())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(output.stylesheets));
// });

// /* concat javascript files, minify if --type production */
// gulp.task('build-js', function() {
//   return gulp.src(input.javascript)
//     .pipe(sourcemaps.init())
//       .pipe(concat('bundle.js'))
//       //only uglify if gulp is ran with '--type production'
//       .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(output.javascript));
// });

gulp.task('css', function() {
    return gulp.src(input.sassPath + '/style.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                input.sass,
                config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/fontawesome/scss',
            ]
        })
           .on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })))
        .pipe(gulp.dest(output.stylesheets));
});

/* convert typescript and concatinate */
gulp.task('typescript', function() {
    var tsResult = gulp.src(input.typescript)
                       .pipe(sourcemaps.init()) // This means sourcemaps will be generated
                       .pipe(ts({
                           sortOutput: true,
                           // ...
                       }));

    return tsResult.js
                .pipe(concat('output.js')) // You can use other plugins that also support gulp-sourcemaps
                .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
                .pipe(gulp.dest(output.javascript));
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', ['build-css', 'typescript'], function() {
  // gulp.watch(input.javascript, ['jshint', 'build-js']);
  gulp.watch(input.typescript, ['typescript']);
  gulp.watch(input.sass, ['css']);
});