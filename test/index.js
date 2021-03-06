var assert = require('assert');
var splitKeys = require('../index');

var fn = function(){};
var obj = {x:1}

/** splitKeys(obj) */
var a = splitKeys({
	'x,y': fn,
	'a , b , c': obj
});

assert.deepEqual(a, {x:fn, y:fn, a: obj, b:obj, c:obj});


/** splitKeys(obj, deep) */
var b = {
	x:{
		'y,z': obj
	}
};

assert.deepEqual(splitKeys(b),{x:{'y,z':obj}});
assert.deepEqual(splitKeys(b,true),{x:{y:obj,z:obj}});


/** splitKeys(obj, separator) */
var c = {
	x$y: obj
};

assert.deepEqual(splitKeys(c), {x$y:obj});
assert.deepEqual(splitKeys(c, '$'), {x:obj, y:obj});
assert.deepEqual(splitKeys(c, /$/), {x:obj, y:obj});


/** splitKeys(obj, deep, separator) */
var d = {
	x:{
		y$z: obj
	}
};

assert.deepEqual(splitKeys(d),{x:{y$z:obj}});
assert.deepEqual(splitKeys(d,true),{x:{y$z:obj}});
assert.deepEqual(splitKeys(d,false,/\$/),{x:{y$z:obj}});
assert.deepEqual(splitKeys(d,true,/\$/),{x:{y:obj,z:obj}});


/** splitKeys(obj, separator, deep) */
var d = {
	x:{
		y$z: obj
	}
};

assert.deepEqual(splitKeys(d),{x:{y$z:obj}});
assert.deepEqual(splitKeys(d,/\$/),{x:{y$z:obj}});
assert.deepEqual(splitKeys(d,/\$/,false),{x:{y$z:obj}});
assert.deepEqual(splitKeys(d,/\$/,true),{x:{y:obj,z:obj}});