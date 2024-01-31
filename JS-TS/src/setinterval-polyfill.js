const createInterval = () => {
	let timerId = 0;
	let timerMap = {};

	const create = (callback, delay) => {
		let currId = timerId++;
		timerMap[currId] = true;
		let targetTime = Date.now() + delay;
		const check = () => {
			if (!timerMap[currId]) return;
			if (Date.now() >= targetTime) {
				callback();
				targetTime += delay;
			}
			requestAnimationFrame(check);
		};

		requestAnimationFrame(check);
		return currId;
	};

	const clear = (id) => {
		delete timerMap[id];
	};

	return { create, clear };
};

window.myInterval = createInterval();
