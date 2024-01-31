Array.prototype.myReduce = function (callback, initialValue) {
	if (!this.length) return [];
	if (!Array.isArray(this)) return "Can't call reduce on this.";
	let initVal = initialValue;
	for (let i = 0; i < this.length; i++) {
		initVal = callback(initVal, this[i], i);
	}

	return initVal;
};
