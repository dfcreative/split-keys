var isObject = require('is-object');
var extend = require('extend');

module.exports = splitKeys;


/**
 * Disentangle listed keys
 *
 * @param {object} set An object with key including listed declarations
 * @example {'a,b,c': 1}
 *
 * @param {boolean} deep Whether to flatten nested objects
 *
 * @return {oblect} Source set passed {@link set}
 */
function splitKeys(obj, deep, separator){
	//ensure separator
	separator = separator === undefined ? splitKeys.separator : separator;

	var list, value;

	for(var keys in obj){
		value = obj[keys];

		if (deep && isObject(value)) splitKeys(value, deep, separator);

		list = keys.split(separator);

		if (list.length > 1){
			delete obj[keys];
			list.forEach(setKey);
		}
	}

	function setKey(key){
		//if existing key - extend, if possible
		if (value !== obj[key] && isObject(value) && isObject(obj[key])) {
			obj[key] = extend({}, obj[key], value);
		}
		//or replace
		else {
			obj[key] = value;
		}
	}

	return obj;
}


/** default separator */
splitKeys.separator = /\s?,\s?/;