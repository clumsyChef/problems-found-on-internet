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

	// sumToZeroSubArrays.reverse().forEach((item) => console.log(item));
	return sumToZeroSubArrays;
};

const groupedArrs = bruteForce(inp);

if (groupedArrs.length) {
	console.log("Has", groupedArrs);
} else {
	console.log("none found");
}
