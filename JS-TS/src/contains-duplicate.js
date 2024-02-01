const main = (arr) => {
	const compareObj = {};
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] in compareObj) {
			return true;
		}

		compareObj[arr[i]] = true;
	}

	return false;
};

const bigArr = [...new Array(200000)].map((i, _i) => _i + 1);

console.log(main([1, 2, 3, 4, 5, 6, 4]));
console.log(main([1, 2, 3, 4, 5, 6]));
console.log(main([...bigArr, 96755]));
