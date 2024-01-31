const prevSummation = () => {
	let summation = 0;
	return (numb = 0) => {
		summation += numb;
		return summation;
	};
};

const sum = prevSummation();

console.log(sum(1));
console.log(sum(3));
console.log(sum(3));
console.log(sum(4));
console.log(sum());r

