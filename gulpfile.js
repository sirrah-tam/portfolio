// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var plumber      = require('gulp-plumber'); // To handle error events
var jshint       = require('gulp-jshint'); // To show JS errors
var cssmin       = require('gulp-cssmin'); // Minify
var imagemin     = require('gulp-imagemin'); // Image Minification
var sass         = require('gulp-sass'); // Compile our Sass
var sourcemaps   = require('gulp-sourcemaps'); // Sass Sourcemaps
var concat       = require('gulp-concat'); // Concatinate JS
var uglify       = require('gulp-uglify'); // Pass through Uglification
var rename       = require('gulp-rename'); // Rename files after compilation
var autoprefixer = require('gulp-autoprefixer'); // Automatically add CSS prefixes for greater CSS3 browser support
var notify       = require("gulp-notify"); // Ability to send error notifications

// Config object to hold directories
var config = {
     sassPath: 'styles/scss',
     bowerDir: 'bower_components' 
};

// Font Awesome
gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*') 
        .pipe(gulp.dest('./fonts')); 
});

// Error handler
var onError = function(err) {
    notify.onError({
      title:    "Gulp error in " + err.plugin,
      message:  err.toString()
    })(err);
    beep(3); // If I'm annoying remove me!!
    this.emit('end');
};

// Lint Task
gulp.task('lint', function() {
	return gulp.src('./script/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
	gulp.src(config.sassPath + '/main.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({
             style: 'compressed',
             loadPath: [
				config.sassPath,
                 config.bowerDir + '/bootstrap-sass/assets/stylesheets/*',
                 config.bowerDir + '/font-awesome/scss'
             ]
         }) )
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
		}))
		.pipe(plumber())
		.pipe(sass())
		.pipe(cssmin())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./styles'))
		.pipe(notify({message: 'Sass complilation is complete!', onLast: true}));
});

gulp.task('images', function() {
	gulp.src([
		'img/*',
	])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			svgoPlugins: [{removeUnknownsAndDefaults: true}, {cleanupIDs: true}]
		}))
		.pipe(gulp.dest('dist/img'))
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
	gulp.src([
		config.bowerDir + '/jquery/dist/jquery.js',
		"scripts/components/*.js"
	])
		.pipe(plumber())
		.pipe(concat('./all.js'))
		.pipe(rename('./main.js'))
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('./scripts'))
		.pipe(notify({message: 'Script compilation is complete!', onLast: true}));
});


// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('scripts/components/*.js', ['lint', 'scripts']);
	gulp.watch(['styles/Sass/*.scss'], ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'icons']);
