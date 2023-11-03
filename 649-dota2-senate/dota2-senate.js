class CustomQueue {
	constructor() {
		this.elements = [];
	}

	enqueue(e) {
		this.elements.push(e);
	}

	dequeue() {
		return this.elements.shift();
	}

	isEmpty() {
		return this.elements.length === 0;
	}

	peek() {
		return !this.isEmpty() ? this.elements[0] : undefined;
	}
}

const predictPartyVictory = function (senate) {
	let n = senate.length;
	let radiant = new CustomQueue(),
		dire = new CustomQueue();

	for (let i = 0; i < n; i++) {
		if (senate[i] === "R") radiant.enqueue(i);
		else dire.enqueue(i);
	}

	while (!radiant.isEmpty() && !dire.isEmpty()) {
		if (radiant.peek() < dire.peek()) {
			radiant.enqueue(radiant.dequeue() + n);
			dire.dequeue();
		} else {
			dire.enqueue(dire.dequeue() + n);
			radiant.dequeue();
		}
	}

	return radiant.isEmpty() ? "Dire" : "Radiant";
};
