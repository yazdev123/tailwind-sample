const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .postCss('src/css/app.css', 'dist/css', [require('tailwindcss')])
    .copyDirectory('src/images', 'dist/images')
    .browserSync({
        proxy: 'localhost/html-starter-webpack-master',
        files: ['src/**/*.*', 'index.html'],
    })
    .options({
        processCssUrls: false,
    });