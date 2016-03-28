'use strict'

const fs           = require('fs')
const gulp         = require('gulp')
const rimraf       = require('rimraf')
const stream       = require('vinyl-source-stream')
const reactify     = require('reactify')
const concat       = require('gulp-concat')
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
  runSequence('reset', 'scripts', 'styles', 'copy', 'server', cb)
})


/**
 * @name build
 * @desc run post install
 */

gulp.task('build', (cb) => {
  runSequence('reset', 'scripts', 'styles', 'copy', cb)
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
 * @name styles
 * @desc bundles main.css
 */

gulp.task('styles', (cb) => {
  gulp.src(['client/styles/lib/opensans.css',
      'client/styles/lib/roboto.css',
      'client/styles/lib/icomoon.css',
      'client/styles/main.css',
      'client/styles/queries.css'
    ])
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(buildDir))
  console.log('Gulp Log, Styles Bundle Created'.magenta)
  cb()
})

/**
 * @name copy
 * @desc copys assets
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
  gulp.watch('client/styles/**/*.css', ['styles'])
  console.log('Gulp Log, Watching Files'.magenta)
}