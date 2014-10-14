# SplitKeys

For each comma-separated key in object create a separate property. That way you can gracefully declarare objects:

Before:

```js
var a = {
	x: {
		a: 1,
		b: 1
	}
};
a.y = a.x;
```

After:

```js
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

#### `splitKeys(object, deep?=true, separator?=',')`