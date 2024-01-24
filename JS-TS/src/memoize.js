// I'll be getting the square of the value in some time
const simpleMemoize = () => {
	const mapper = new Map();
	return (args) => {
		let value;
		if (mapper.has(args)) {
			console.log("getting from cache");
			value = mapper.get(args);
		} else {
			console.log("calculating the value");
			for (let i = 0; i < 20000000; i++) {}
			value = args ** 2;
			mapper.set(args, value);
		}
		console.log("Value:", value);
		return value;
	};
};

const a = simpleMemoize();

// a(2);
// a(2);

// END

const memoizePassingAFunction = (fn) => {
	const mapper = new Map();
	return (args) => {
		let value;
		if (mapper.has(args)) {
			console.log("getting from cache");
			value = mapper.get(args);
		} else {
			console.log("calculating the value");
			value = fn.call(this, args);
			mapper.set(args, value);
		}

		console.log("Value:", value);

		return value;
	};
};

const squareIt = (n) => {
	for (let i = 0; i < 2000000000; i++) {}
	return n ** 2;
};

const b = memoizePassingAFunction(squareIt);
// b(2);
// b(2);
