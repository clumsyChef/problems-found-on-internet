// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const main = {
	one(arr, target) {
		const anObj = {};
		for (const ind in arr) {
			console.log("asdf", anObj);
			const complement = target - arr[ind];
			if (complement in anObj) return [anObj[complement], ind];
			anObj[arr[ind]] = ind;
		}
		return null;
	},
};

console.log(main.one([1, 2, 3, 4, 5, 6], 10));
