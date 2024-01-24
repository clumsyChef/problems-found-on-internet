function longestConsecutiveSequence_2(arr) {
	const arrSorted = arr.sort((a, b) => a - b);
	let [lInd, rInd] = [0, 0];
	let maxLen = 1;
	let interMaxLen = 1;
	while (lInd < arr.length) {
		rInd++;
		if (arrSorted[rInd] - arrSorted[lInd] === interMaxLen) {
			interMaxLen++;
			continue;
		} else {
			if (interMaxLen > maxLen) maxLen = interMaxLen;
			interMaxLen = 0;
			rInd = lInd = rInd + 1;
		}
	}
	return maxLen;
}

function longestConsecutiveSequence_1(arr) {
	const mySet = new Set(arr);
	let streak = 0;
	for (let i = 0; i < arr.length; i++) {
		let currentNum = arr[i];
		let localStreak = 1;
		while (mySet.has(currentNum + 1)) {
			currentNum++;
			localStreak++;
		}
		streak = localStreak > streak ? localStreak : streak;
	}
	return streak;
}

console.log(longestConsecutiveSequence_1([2, 1, 4, 7, 3]));
console.log(longestConsecutiveSequence_2([2, 1, 4, 7, 3]));
