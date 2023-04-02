
class MyQueue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }
  
  push(x) {
    this.inputStack.push(x);
  }
  
  pop() {
    if (this.empty()) {
      return null;
    }
    this.peek(); 
    return this.outputStack.pop();
  }
  
  peek() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack.length ? this.outputStack[this.outputStack.length - 1] : null;
  }
  
  empty() {
    return !this.inputStack.length && !this.outputStack.length;
  }
}



/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */