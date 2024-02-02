const main = {
	one(arr) {
		const n = arr.length;
		const left = Array(n).fill(0);
		const right = Array(n).fill(0);
		const output = Array(n).fill(0);

		left[0] = arr[0];
		right[n - 1] = arr[n - 1];

		for (let i = 1; i < n; i++) {
			left[i] = left[i - 1] * arr[i];
		}

		for (let i = n - 2; i > -1; i--) {
			right[i] = right[i + 1] * arr[i];
		}

		console.log(left, right);
		for (let i = 0; i < n; i++) {
			const leftProduct = left[i - 1] ?? 1;
			const rightProduct = right[i + 1] ?? 1;

			output[i] = leftProduct * rightProduct;
		}

		return output;
	},
};

// console.log(main.one([1, 2, 3, 4]));
console.log(main.one([-1, 1, 0, -3, 3]));
