'use strict'

const fs         = require('fs')
const gulp       = require('gulp')
const rimraf     = require('rimraf')
const stream     = require('vinyl-source-stream')
const flatten    = require('gulp-flatten')
const reactify   = require('reactify')
const nodemon    = require('gulp-nodemon')
const babelify   = require('babelify')
const browserify = require('browserify')
const scriptsDir = './client/scripts/'
const stylesDir  = './client/styles/'
const targetDir  = './client/dist/'
const entryPoint = 'main.js'

require('colors')

gulp.task('default', ['init', 'server'])
gulp.task('build', ['init'])

gulp.task('init', (cb) => {
  rimraf(targetDir, () => {
    console.log('Gulp Log, Target Directory Removed'.magenta)
     fs.mkdirSync(targetDir)
      console.log('Gulp Log, Target Directory Created'.magenta)
      browserify({ entries: [scriptsDir + entryPoint], debug: true })
        .transform(reactify)
        .transform('babelify', {presets: ['es2015', 'react']})        
        .bundle()
        .pipe(stream(entryPoint))    
        .pipe(gulp.dest(targetDir))
        console.log('Gulp Log, Bundle Created'.magenta)
        copyStyles(cb)
    })
})

function copyStyles(cb) {
  gulp.src(stylesDir + '**/**.css')
    .pipe(flatten())
    .pipe(gulp.dest(targetDir))
    console.log('Gulp Log, Styles Copied'.magenta)
    if (gulp.seq.indexOf('build') > -1) return cb()
    watchFiles(cb)
}

function watchFiles(cb) {
  gulp.watch(scriptsDir + '**/**.js', ['bundle'])
  gulp.watch(stylesDir + '**/**.css', ['copyStyles'])  
  console.log('Gulp Log, Watching Files'.magenta)  
  cb()
}

gulp.task('bundle', (cb) => {
  return browserify({ entries: [scriptsDir + entryPoint], debug: true })
    .transform(reactify)
    .transform('babelify', {presets: ['es2015', 'react']})     
    .bundle()
    .pipe(stream(entryPoint))    
    .pipe(gulp.dest(targetDir))
    cb()
})

gulp.task('copyStyles', (cb) => {
 return gulp.src(stylesDir + '**/**.css')
    .pipe(flatten())
    .pipe(gulp.dest(targetDir))
    cb()    
})

gulp.task('server', ['init'],  () => {
  return nodemon({ script: 'server/app.js', ignore: ['client/**/*'] })
    .on('start', () => {
      console.log('Gulp Log, Server Started'.green)
    })
    .on('restart', () => {
      console.log('Gulp Log, Server Restarted'.green)
    })
})