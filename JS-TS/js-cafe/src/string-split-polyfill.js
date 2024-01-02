String.prototype.mySplit = function (splitFrom) {
	if (splitFrom.length === 0) return Array.from(this);
	return recursiveFunc(this, splitFrom);
};

const recursiveFunc = (str, splitFrom, arr = []) => {
	if (str.length === 0) return [...arr, ""];
	const ind = str.indexOf(splitFrom);
	if (ind < 0) return [...arr, str];
	const inArr = str.slice(0, ind);
	const newSubStr = str.substring(ind + splitFrom.length);
	const newArr = [...arr, inArr];
	return recursiveFunc(newSubStr, splitFrom, newArr);
};

console.log("The quick the fox jumps the lazy dog.".mySplit("the"));
console.log("The quick the fox jumps the lazy dog.".mySplit(""));
console.log("The quick the fox jumps the lazy dog.".mySplit(" "));
console.log("aaarrraarra".split("ar"));
