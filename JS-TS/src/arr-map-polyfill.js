const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callbackFn) {
	let arr = [];
	for (let i = 0; i < this.length; i++) {
		const val = callbackFn(this[i], i, this);
		arr.push(val);
	}
	return arr;
};
