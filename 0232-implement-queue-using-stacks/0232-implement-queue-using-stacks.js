
class MyQueue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }
  
  push(x) {
    this.inputStack.push(x);
  }
  
  pop() {
    this.peek(); // Make sure outputStack is not empty
    return this.outputStack.pop();
  }
  
  peek() {
    if (this.outputStack.length === 0) {
      // Transfer all elements from inputStack to outputStack
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack[this.outputStack.length - 1];
  }
  
  empty() {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
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