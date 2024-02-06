const int_1 = [
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
];
const int_2 = [
	[1, 4],
	[4, 5],
];

// This question can come with unsorted array of intervals then we have to sort them first: intervals.sort((a,b) => a[0] - b[0])

const mergeIntervals = (intervals) => {
	const result = [];
	let localInt = intervals[0];
	for (let i = 1; i < intervals.length; i++) {
		if (localInt[1] >= intervals[i][0]) {
			localInt[0] = Math.min(localInt[0], intervals[i][0]);
			localInt[1] = Math.max(localInt[1], intervals[i][1]);
		} else {
			result.push(localInt);
			localInt = intervals[i];
		}
	}

	result.push(localInt);

	return result;
};

console.log(mergeIntervals(int_1));
console.log(mergeIntervals(int_2));
