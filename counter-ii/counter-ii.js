/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
class Counter {
  #currentValue;
  #initialValue;

  constructor(init) {
    this.#currentValue = init;
    this.#initialValue = init;
  }

  increment() {
    this.#currentValue += 1;
    return this.#currentValue;
  }

  decrement() {
    this.#currentValue -= 1;
    return this.#currentValue;
  }

  reset() {
    this.#currentValue = this.#initialValue;
    return this.#currentValue;
  }
}

function createCounter(init) {
  return new Counter(init);
}


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */