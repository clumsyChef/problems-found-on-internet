const obj = {
	A: "12",
	B: 23,
	C: {
		P: 23,
		O: {
			L: 56,
		},
		Q: [1, 2],
	},
};

// below is the output required

// {
//     "A": "12",
//     "B": 23,
//     "C.P": 23,
//     "C.O.L": 56,
//     "C.Q.0": 1,
//     "C.Q.1": 2
// }

const finalObj = {};

const flattenObj = (obj, prevPath = "") => {
	for (const i in obj) {
		const finalPath = prevPath ? `${prevPath}.${i}` : i;
		if (typeof obj[i] === "object") {
			flattenObj(obj[i], finalPath);
		} else {
			finalObj[finalPath] = obj[i];
		}
	}
};

flattenObj(obj);
console.log(finalObj);
