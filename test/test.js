var expect = require('chai').expect;

var module = require('../src/js/module.js');

define('This is a test', function() {
    it('should work', function() {
        expect(5).to.equal(5);
    });

    it('add() method in module should work', function() {
        expect(module.add(5, 3)).to.equal(8);
    })
});