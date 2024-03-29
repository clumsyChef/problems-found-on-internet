const createTimeout = () => {
	let timerId = 0;
	let timerMap = {};

	const create = (callback, delay) => {
		let currId = timerId++;
		timerMap[currId] = true;
		const targetTime = Date.now() + delay;
		const check = () => {
			if (!timerMap[currId]) return;
			if (Date.now() > targetTime) {
				delete timerMap[currId];
				return callback();
			} else {
				requestIdleCallback(check);
			}
		};

		requestIdleCallback(check);
		return currId;
	};

	const clear = (id) => {
		delete timerMap[id];
	};

	return { create, clear };
};

window.myTimeout = createTimeout();
console.log("asdf");
