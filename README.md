static-site-boilerplate
=======================

Some boilerplate code for static site generation

## How to use this?
1. Clone this repository `git clone https://github.com/bdadam/static-site-boilerplate`
1. Install node dependencies `npm install`
1. Install bower dependencies `bower install`
1. Simply run `grunt build` to see that everything works

## How to work with this?
You can run `grunt --dev` while developing. This starts a new web server on port 3000 (http://localhost:3000/).
After every change the affected files are regenerated.

## Available Grunt tasks
1. `grunt` - default task: build everything and then whatches for changes and regenerated the affected files
1. `grunt build` - builds everything
1. `grunt clean` - cleanup
1. `grunt assemble` - generates html with Assemble
1. `grunt less` - generated css file(s) from less files
1. `grunt uncss` - removes unnecessary css rules
1. `grunt requirejs` - generates JavaScript files with RequireJS (or Almond)
1. `grunt hashres` - computes hash code for static resources (aka cachebusting)
1. `grunt connect` - starts web server and stops it automatically when all the other tasks finished
1. `grunt watch` - checks for file modifications and runs the appropriate tasks

All tasks accept a `--dev` flag, which disables CPU intensive tasks like JS-optimization. This should only be used during development.


## What is included?
1. Static site generation with [Assemble](http://assemble.io/)
1. Generating and minifying a single CSS file with Less
1. Generating and minifying a single JavaScript file with RequireJS
1. Removing unnecessary CSS rules with `uncss`
1. Generating hash (cache buster) for JS and CSS files
1. Automatic regeneration and Liverload during development

## Who is using this boilerplate?
[bdadam.com](http://bdadam.com/)
