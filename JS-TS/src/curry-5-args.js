let arrLen = 5;

const sum = (...args) => {
	if (arrLen === args.length) {
		arrLen = 5; // everytime we actually calculate the value we need to  make `arrLen` 5
		return args.reduce((final, curr) => (final += curr), 0);
	} else {
		// one argument will be the summation so we cannot remove all the args
		arrLen -= args.length - 1;
		const currentArgsSum = args.reduce((final, curr) => (final += curr), 0);
		return sum.bind(this, currentArgsSum);
	}
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4)(5));
console.log(sum(1)(2)(3)(4)(5));
console.log(sum(1, 2, 3)(4, 5));
console.log(sum(1, 2)(3, 4, 5));
console.log(sum(1)(2, 3, 4, 5));
