const inp = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
// const inp = [3, 4, 4, 6, 4];

const arrReduceToZero = (arr) => !arr.reduce((acc, curr) => (acc += curr), 0);

const bruteForce = (arr) => {
	let win = arr.length;
	const sumToZeroSubArrays = [];
	while (win > 0) {
		let startInd = 0;
		let endInd = win - 1;
		while (endInd < arr.length) {
			const arrToCheck = arr.slice(startInd, endInd + 1);
			if (arrReduceToZero(arrToCheck)) {
				sumToZeroSubArrays.push(arrToCheck);
			}
			startInd++;
			endInd++;
		}
		win--;
	}

	return sumToZeroSubArrays;
};

// const groupedArrs = bruteForce(inp);

// if (groupedArrs.length) {
// 	console.log("Has", groupedArrs);
// } else {
// 	console.log("none found");
// }

const subWithZero = (arr) => {
	const mySet = new Set();
	mySet.add(0);

	let summ = 0;

	for (let i = 0; i < arr.length; i++) {
		summ += arr[i];

		if (mySet.has(summ)) {
			return true;
		}
		mySet.add(summ);
	}

	return false;
};

console.log(subWithZero(inp));
console.log(subWithZero([0]));
console.log(subWithZero([1, 2, 3, 4]));
console.log(subWithZero([5, 5, -3, 3]));
