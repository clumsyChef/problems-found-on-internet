// console.log("hey this is running");

const areParenthesesBalanced = (str) => {
	if (str.length % 2 !== 0) return false;

	const myStack = [];
	const myMap = {
		"}": "{",
		"]": "[",
		")": "(",
	};

	for (let i = 0; i < str.length; i++) {
		const current = str[i];
		if (Object.keys(myMap).includes(current)) {
			if (!myStack.length) return false;
			const lastItem = myStack.slice(-1)[0];
			if (lastItem !== myMap[current]) {
				return false;
			} else {
				myStack.pop();
			}
		} else {
			myStack.push(current);
		}
	}

	return true;
};

console.log(areParenthesesBalanced("]["));
console.log(areParenthesesBalanced("[{}]"));
console.log(areParenthesesBalanced("[{}{}{}{]"));
console.log(areParenthesesBalanced("({[]}){}[][({})]"));
