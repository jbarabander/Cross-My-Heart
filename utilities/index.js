'use strict'

var valueAccum = (value, array) => {
	array.push(value);
	return array;
};

var splitObj = (obj) => {
	var keys = Object.keys(obj);
	var values = keys.map(function(key) {
		return obj[key];
	});
	return {keys: keys, values: values};
}

var mergeObj = function(obj) {
	var keys; var values;
	if(arguments.length === 1) {
		keys = obj.keys;
		values = obj.values;
	} else {
		keys = arguments[0];
		values = arguments[1];
	}
	return keys.reduce(function(previous, current, index) {
		previous[current] = values[index];
		return previous;
	}, {});
}


//simple version
var flattenArr = function(arr) {
	var currentIndex = 0;
	var currentEl = arr[currentIndex];
	while(currentEl) {
		if(Array.isArray(arr[currentIndex])) {
			arr.splice(currentIndex, 1, ...arr[currentIndex]);
		} else {
			currentIndex++;
		}
		currentEl = arr[currentIndex];
	}
}

//other version
var flattenArr = function(arr) {
	var newArr = [];
	var queue = [];
	var currentIndex = 0;
	var currentQueueIndex = 0;
	var currentEl = arr[currentIndex];
	while(currentEl) {
		if(queue.length) {
			if(Array.isArray(queue[currentQueueIndex])) {

			} 
		}
	}
}
//recurisve version
var flattenArr = function(arr) {
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) newArr = newArr.concat(flattenArr(arr[i]));	
		else newArr.push(arr[i]);
	}
	return newArr;
}
//while version 
var flattenArr = function(arr) {
	
}


module.exports = {
	valueAccum: valueAccum,
	splitObj: splitObj,
	mergeObj: mergeObj
}
