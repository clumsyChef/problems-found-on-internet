const main = {
	one(intervals, newInterval) {
		let [start, end] = newInterval;
		const checkBetween = (start, end, target) =>
			start === target || end === target || (target > start && target < end);

		let startInd = null,
			endInd = null;

		for (let i = 0; i < intervals.length; i++) {
			const [startInside, endInside] = [
				checkBetween(intervals[i][0], intervals[i][1], start),
				checkBetween(intervals[i][0], intervals[i][1], end),
			];

			if (startInside) startInd = i;
			if (endInside) endInd = i;
		}

		if (startInd !== null && endInd !== null) {
			if (startInd === endInd) {
				intervals[startInd][0] = Math.min(intervals[startInd][0], start);
				intervals[startInd][1] = Math.max(intervals[startInd][1], end);
			} else {
				const requiredInterval = [Math.min(intervals[startInd][0], start), Math.max(intervals[endInd][1], end)];
				const finalArr = [...intervals.slice(0, startInd), requiredInterval, ...intervals.slice(endInd + 1)];
				return finalArr;
			}
		} else if (startInd !== null) {
			intervals[startInd][0] = Math.min(intervals[startInd][0], start);
			intervals[startInd][1] = Math.max(intervals[startInd][1], end);
		} else if (endInd !== null) {
			intervals[endInd][0] = Math.min(intervals[endInd][0], start);
			intervals[endInd][1] = Math.max(intervals[endInd][1], end);
		}

		return intervals;
	},

	two(intervals, newInterval) {
		const result = [];
		for (const interval of intervals) {
			if (interval[1] < newInterval[0]) {
				result.push(interval);
			} else if (newInterval[1] < interval[0]) {
				result.push(newInterval);
				newInterval = interval;
			} else {
				newInterval[0] = Math.min(interval[0], newInterval[0]);
				newInterval[1] = Math.max(interval[1], newInterval[1]);
			}
		}

		result.push(newInterval);

		return result;
	},
};

console.log(
	main.two(
		[
			[1, 2],
			[3, 5],
			[6, 7],
			[8, 10],
			[12, 16],
		],
		[4, 8]
	)
);
// Answer: [[1, 2], [3, 10], [12, 16]]

console.log(
	main.two(
		[
			[1, 3],
			[6, 9],
		],
		[2, 5]
	)
);
// Answer: [[1, 5], [6, 9]]

console.log(
	main.two(
		[
			[1, 3],
			[6, 9],
		],
		[4, 7]
	)
);
// Answer: [[1, 3], [4, 9]]

console.log(
	main.two(
		[
			[1, 5],
			[7, 9],
		],
		[2, 4]
	)
);
// Answer: [[1, 5], [7, 9]]
