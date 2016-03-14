var expect = require('chai').expect;
var nau = require('./index.js');

describe('Tests for getting current time in integer', function() {
    it('should return current time in integer', function() {
    	expect(typeof nau()).to.be.equal('number');
    });
});