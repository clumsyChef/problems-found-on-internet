// Find the index of the provided target by divide and conquer method

function search(arr, target) {
	let [start, end] = [0, arr.length - 1];
	while (end >= start) {
		let mid = Math.floor((end + start) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 6));
