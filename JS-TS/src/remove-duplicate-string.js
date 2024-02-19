const main = {
	solution_1(str) {
		const splitted = str.split("");
		const final = [...new Set(splitted)].join("");
		return final;
	},

	solution_2(str) {
		const obj = {};
		let finalStr = "";
		for (let i = 0; i < str.length; i++) {
			if (!obj[str[i]]) {
				finalStr += str[i];
				obj[str[i]] = true;
			}
		}

		return finalStr;
	},
};

console.log(main.solution_2("hello world"));
console.log(main.solution_2("hello world defkq"));
