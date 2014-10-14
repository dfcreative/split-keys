# Split Keys

For each comma-separated key in object create a separate property.
Now you can gracefully declare objects.

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
//alias is comma-separated
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