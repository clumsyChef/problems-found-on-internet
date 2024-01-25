// SLIDING WINDOW PATTERN
function maxSubarrSumSlidingWindow(arr, len) {
	if (arr.length < len) return null;
	let maxSum = 0;
	for (let i = 0; i < len; i++) {
		maxSum += arr[i];
	}

	let tempSum = maxSum;
	for (let j = len; j < arr.length; j++) {
		tempSum = tempSum - arr[j - len] + arr[j];
		if (tempSum > maxSum) {
			maxSum = tempSum;
		}
	}

	return maxSum;
}

function maxSubarrSumTwoPointer(arr, len) {
	let [i, j] = [0, len - 1];
	let maxSum = 0;
	for (let l = i; l <= j; l++) {
		maxSum += arr[l];
	}
	let tempSum = maxSum;

	while (j < arr.length) {
		tempSum -= arr[i];
		i++;
		j++;
		tempSum += arr[j];
		if (tempSum > maxSum) {
			maxSum = tempSum;
		}
	}

	return maxSum;
}

console.log(maxSubarrSumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarrSumTwoPointer([1, 2, 5, 2, 8, 1, 5], 4));
