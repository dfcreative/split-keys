var assert = require('assert');
var splitKeys = require('../index');

var fn = function(){};
var obj = {x:1}

var a = splitKeys({
	'x,y': fn,
	'a , b , c': obj
});

assert.deepEqual(a, {x:fn, y:fn, a: obj, b:obj, c:obj});