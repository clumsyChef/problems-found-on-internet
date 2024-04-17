class Stack {
	constructor() {
		this.stack = [];
	}

	push(data) {
		this.stack.push(data);
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack[this.stack.length - 1];
	}

	isEmpty() {
		return this.stack.length === 0;
	}

	clear() {
		this.stack = [];
	}

	size() {
		return this.stack.length;
	}
}

var stack = new Stack(); //creating new instance of Stack
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());
