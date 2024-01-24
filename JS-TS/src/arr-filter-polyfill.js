Array.prototype.myFilter = function (callbackFunc) {
	const finalArr = [];
	for (let i = 0; i < this.length; i++) {
		const val = callbackFunc(this[i], i, this);
		if (val) finalArr.push(this[i]);
	}

	return finalArr;
};
