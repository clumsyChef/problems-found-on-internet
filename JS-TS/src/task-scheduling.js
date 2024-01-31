let schedules = [
	{ id: "a", dependencies: ["b", "c"] },
	{ id: "b", dependencies: ["d"] },
	{ id: "c", dependencies: ["e"] },
	{ id: "d", dependencies: [] },
	{ id: "e", dependencies: ["f"] },
	{ id: "f", dependencies: [] },
];

// d -> f -> b -> e -> c -> a

let schedulesCompleted = [];

while (schedulesCompleted.length < schedules.length) {
	schedules.forEach((task) => {
		if (!task.dependencies.length && !schedulesCompleted.includes(task.id)) {
			console.log("EXECUTING:", task.id);
			schedulesCompleted.push(task.id);
			schedules.forEach((_task) => {
				_task.dependencies = _task.dependencies.filter((item) => item !== task.id);
			});
		}
	});
}
