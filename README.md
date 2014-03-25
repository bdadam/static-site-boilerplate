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

## What is included?
1. Static site generation with [Assemble](http://assemble.io/)
1. Generating and minifying a single CSS file with Less
1. Generating and minifying a single JavaScript file with RequireJS
1. Removing unnecessary CSS rules with `uncss`
1. Generating hash (cache buster) for JS and CSS files
1. Automatic regeneration and Liverload during development

## Who is using this boilerplate?
[bdadam.com](http://bdadam.com/)
