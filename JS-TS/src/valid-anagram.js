const main = {
	one(s, t) {
		return s.split("").sort().join("") === t.split("").sort().join("");
	},

	two(s, t) {
		if (s.length !== t.length) return false;
		const newMap = new Map();
		for (const c of s) {
			if (newMap.has(c)) {
				newMap.set(c, newMap.get(c) + 1);
			} else {
				newMap.set(c, 1);
			}
		}

		for (const c of t) {
			if (!newMap.has(c)) return false;
			const currCVal = newMap.get(c);
			newMap.set(c, currCVal - 1);
			if (newMap.get(c) === 0) newMap.delete(c);
		}

		return true;
	},
};

console.log(main.two("well", "welll"));
console.log(main.two("abcf", "abcd"));
console.log(main.two("abcd", "abcd"));
console.log(main.two("abcde", "abcde"));
