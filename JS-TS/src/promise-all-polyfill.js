const fakeApi = (time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(time);
		}, time);
	});
};

const arrOfPromises = [fakeApi(1000), fakeApi(2000), fakeApi(3000), fakeApi(4000)];

const promiseAllPolyfill = (tasks) => {
	return new Promise((resolve, reject) => {
		const output = [];
		tasks.forEach((item, ind) => {
			item.then((result) => {
				output.push(result);
				if (ind === tasks.length - 1) resolve(output);
			}).catch((err) => {
				reject(err);
			});
		});
	});
};

promiseAllPolyfill(arrOfPromises).then((result) => console.log(result));
