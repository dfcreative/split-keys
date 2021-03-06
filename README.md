# Split Keys [![Build Status](https://travis-ci.org/dfcreative/split-keys.svg?branch=master)](https://travis-ci.org/dfcreative/split-keys) <a href="UNLICENSE"><img src="http://upload.wikimedia.org/wikipedia/commons/6/62/PD-icon.svg" width="20"/></a>

Gracefully declare properties aliases within objects.
Split-keys splits comma-separated keys in object and for each key creates property alias.

Before:

```js
var a = {
	x: {
		a: 1,
		b: 1
	}
};

//create alias
a.y = a.x;
```

After:

```js
//declare list of aliases
var a = splitKeys({
	'x, y': {
		a: 1,
		b: 1
	}
});
```


## Use

`$ npm install split-keys`

```js
var splitKeys = require('split-keys');

var obj = splitKeys({
	'a, b': function(){}
});

obj.a === obj.b //true
```

## API

* `splitKeys(object)` — split comma-separated properties

* `splitKeys(object, deep)` — split comma-separated properties, including inner objects

* `splitKeys(object, separator)` — apply custom separator to split. Separator can be whether a string or a RegExp.

* `splitKeys(object, separator, deep)` or `splitKeys(object, deep, separator)`  — apply custom separator to deep split keys

[![NPM](https://nodei.co/npm/split-keys.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/split-keys/)