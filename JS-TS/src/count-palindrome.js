const main = {
	isPalindrome(str) {
		return str === str.split("").reverse().join("");
	},

	solution_1(str) {
		let count = str.length;
		if (this.isPalindrome(str)) count++;
		let windowWidth = str.length - 1;
		let [left, right] = [0, windowWidth - 1];
		while (windowWidth > 1) {
			while (right < str.length) {
				const curr = str.slice(left, right + 1);
				if (this.isPalindrome(curr)) count++;
				left++;
				right++;
			}
			left = 0;
			windowWidth--;
			right = windowWidth - 1;
		}

		return count;
	},

	countPallindromes(sentence, left, right) {
		let count = 0;
		while (left >= 0 && right < sentence.length && sentence[left] == sentence[right]) {
			count++;
			left--;
			right++;
		}
		return count;
	},

	solution_2(sentence) {
		let count = 0;
		for (let i = 0; i < sentence.length; i++) {
			count += this.countPallindromes(sentence, i, i);
			count += this.countPallindromes(sentence, i, i + 1);
		}
		return count;
	},
};

console.log(main.solution_2("aabbba"));
console.log(main.solution_1("aabbba"));
