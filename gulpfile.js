'use strict'

const fs           = require('fs')
const gulp         = require('gulp')
const concat       = require('gulp-concat')
const rimraf       = require('rimraf')
const stylus       = require('gulp-stylus')
const stream       = require('vinyl-source-stream')
const reactify     = require('reactify')
const nodemon      = require('gulp-nodemon')
const babelify     = require('babelify')
const browserify   = require('browserify')
const runSequence  = require('run-sequence')
const autoprefixer = require('gulp-autoprefixer')
const scriptsDir   = './client/scripts/'
const stylesDir    = './client/styles/'
const buildDir     = './client/dist/'
const entryPoint   = 'main.js'

require('colors')


/**
 * @name default
 * @desc run for development
 */

gulp.task('default', (cb) => {
  runSequence('reset', 'scripts', 'libStyles', 'devStyles', 'copy', 'server', cb)
})


/**
 * @name build
 * @desc run post install
 */

gulp.task('build', (cb) => {
  runSequence('reset', 'scripts', 'libStyles', 'devStyles', 'copy', cb)
})


/**
 * @name reset
 * @desc deletes and creates build dir
 */

gulp.task('reset', (cb) => {
  rimraf(buildDir, () => {
    fs.mkdirSync('client/dist')
    console.log('Gulp Log, Reset Build Dir'.magenta)
    cb()
  })
})


/**
 * @name scripts
 * @desc bundles main.js
 */

gulp.task('scripts', (cb) => {
  browserify({ entries: [scriptsDir + entryPoint], debug: true })
    .transform(reactify)
    .transform('babelify', { presets: ['es2015', 'react'] })
    .bundle()
    .pipe(stream(entryPoint))
    .pipe(gulp.dest(buildDir))
  console.log('Gulp Log, Scripts Bundle Created'.magenta)
  cb()
})


/**
 * @name stylus
 * @desc transforms stylus files
 */

 gulp.task('stylus', () => {
  console.log('Gulp Log, Transform Stylus'.magenta)
  return gulp.src('./client/styles/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest(buildDir));
})



/**
 * @name devStyles
 * @desc autoprefxies main.css after stylus files are transformed
 */ 

gulp.task('devStyles', ['stylus'], () => {
  console.log('Gulp Log, Autoprefix Main Styles'.magenta)
  return gulp.src('client/dist/main.css')
    .pipe(autoprefixer({ 
      cascade: false 
    }))
    .pipe(gulp.dest(buildDir))
})


/**
 * @name libStyles
 * @desc concats lib styles
 */

gulp.task('libStyles', (cb) => {
  gulp.src(['client/styles/lib/opensans.css',
      'client/styles/lib/roboto.css',
      'client/styles/lib/icomoon.css'
    ])
    .pipe(concat('lib.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest(buildDir))
  console.log('Gulp Log, Lib Styles Created'.magenta)
  cb()
})


/**
 * @name copy
 * @desc copies assets
 */

gulp.task('copy', (cb) => {
  gulp.src(['client/assets/fonts/**/*']).pipe(gulp.dest('client/dist/fonts'))
  gulp.src(['client/assets/images/**/*']).pipe(gulp.dest('client/dist/images'))
  console.log('Gulp Log, Assets Copied'.magenta)
  cb()
})


/**
 * @name server
 * @desc starts server
 */

gulp.task('server', () => {
  nodemon({ script: 'server/app.js', ignore: ['client/**/*'] })
    .on('start', () => {
      console.log('Gulp Log, Server Started'.magenta)
      watch()
    })
    .on('restart', () => {
      console.log('Gulp Log, Server Restarted'.green)
    })
})


/**
 * @name watch
 * @desc watches files after the server starts
 */

function watch() {
  gulp.watch('client/scripts/**/*.js', ['scripts'])
  gulp.watch('client/styles/**/*.styl', ['devStyles'])
  console.log('Gulp Log, Watching Files'.magenta)
}