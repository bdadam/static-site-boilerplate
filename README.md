static-site-boilerplate
=======================

Some boilerplate code for static site generation

## How to use this?
1. Clone this repository `git clone https://github.com/bdadam/static-site-boilerplate`
1. Install node dependencies `npm install`
1. Install bower dependencies `bower install`
1. Simply run `grunt build` to see that everything works

## How to work with this?
You can run `grunt dev` while developing. This starts a new web server on port 3000 (http://localhost:3000/).
After every change the affected files are regenerated.

## Available Grunt tasks
1. `grunt` - default task: build everything and then whatches for changes and regenerated the affected files
1. `grunt build` - builds everything
1. `grunt clean` - cleanup
1. `grunt assemble` - generates html with Assemble
1. `grunt less` - generated css file(s) from less files
1. `grunt sass` - generated css file(s) from scss files
1. `grunt uncss` - removes unnecessary css rules
1. `grunt requirejs` - generates JavaScript files with RequireJS (or Almond)
1. `grunt webpack` - generates JavaScript files with WebPack - uses CommonJS format
1. `grunt hashres` - computes hash code for static resources (aka cachebusting)
1. `grunt connect` - starts web server and stops it automatically when all the other tasks finished
1. `grunt watch` - checks for file modifications and runs the appropriate tasks
1. `grunt dev` - runs a complete build and then waits for modifications (watch)

### Karma support (JavaScript unit testing)

1. `grunt karma:dist` - runs JS unit tests in Chrome, Firefox, IE and PhantomJS
1. `grunt karma:dev` - runs JS unit tests in PhantomJS only


All tasks accept a `--dev` flag, which disables many optimizations (minification), enables source maps, etc. This should only be used during development.


## What is included?
1. Static site generation with [Assemble](http://assemble.io/)
1. Generating and minifying a single CSS file with Less
1. Generating and minifying a single JavaScript file with RequireJS or WebPack
1. Linting JS files with ESlint
1. Unit testing for JavaScript with Karma
1. Generating hash (cache buster) for JS and CSS files
1. Automatic regeneration and Liverload during development

## Who is using this boilerplate?
* [bdadam.com](http://bdadam.com/) [[complete source code](https://github.com/bdadam/bdadam.com)]
* [the-game-of-love.com](http://the-game-of-love.com/) [[complete source code](https://github.com/bdadam/the-game-of-love.com)]
