const a = "wowomgzomgasdfomgasdfomg";
const b = "omg";

function findOccurences(str1, target) {
	let occu = 0;
	let [s, e] = [0, target.length];
	for (let i = e; i <= str1.length; i++) {
		const currentStr = str1.slice(s, e);
		if (currentStr === target) occu++;
		s++;
		e++;
	}

	return occu;
}

console.log(findOccurences(a, b));
