const main = {
	one(arr) {
		let [maxItem, maxItemInd] = [arr[0], 0];
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] > maxItem) {
				[maxItem, maxItemInd] = [arr[i], i];
			}
		}

		let maxVolume = 0;

		for (let i = 0; i < arr.length; i++) {
			const indDiff = Math.abs(maxItemInd - i);
			const smallerItem = Math.min(arr[i], maxItem);
			if (smallerItem * indDiff > maxVolume) {
				maxVolume = smallerItem * indDiff;
			}
		}

		return maxVolume;
	},

	two(height) {
		let mx = 0;
		let l = 0;
		let r = height.length - 1;

		while (l < r) {
			mx = Math.max(mx, Math.min(height[l], height[r]) * (r - l));
			if (height[l] < height[r]) l += 1;
			else if (height[r] < height[l]) r -= 1;
			else {
				l += 1;
				r -= 1;
			}
		}
		return mx;
	},
};

console.log(main.one([1, 9, 6, 2, 5, 4, 8, 9, 7]));
console.log(main.one([1, 1]));

console.log(main.two([1, 9, 6, 2, 5, 4, 8, 9, 7]));
console.log(main.two([1, 1]));
