const mainArr = [
	[[1, [1.1]], 2, 3],
	[4, 5],
];

const flatIt = (arr) =>
	arr.reduce((final, curr) => (Array.isArray(curr) ? final.concat(flatIt(curr)) : final.concat(curr)), []);

console.log(flatIt(mainArr));
