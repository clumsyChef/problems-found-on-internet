function subarraySum(arr, target) {
	let [lInd, rInd] = [0, 0];
	let summ = arr[rInd];

	while (true) {
		if (rInd >= arr.length) return null;
		if (summ === target) {
			return [lInd, rInd];
		} else if (summ < target) {
			rInd++;
			summ += arr[rInd];
		} else {
			summ -= arr[lInd];
			lInd++;
		}
	}
}

console.log(subarraySum([1, 4, 20, 3, 10, 5], 33));
