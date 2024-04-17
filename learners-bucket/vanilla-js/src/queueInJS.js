class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(data) {
		this.queue.push(data);
	}

	dequeue() {
		this.queue.shift();
	}

	rear() {
		return this.queue[this.queue.length - 1];
	}

	front() {
		return this.queue[0];
	}

	size() {
		return this.queue.length;
	}

	isEmpty() {
		return this.queue.length === 0;
	}

	print() {
		console.log(this.queue.join());
	}
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("pranav");
queue.enqueue("sachin");
queue.enqueue("yogesh");
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
queue.enqueue("prashant");
queue.enqueue("yadav");
queue.print();
console.log(queue.size());
console.log(queue.front());
console.log(queue.rear());
