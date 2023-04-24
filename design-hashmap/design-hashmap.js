class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class MyHashMap {
  constructor() {
    this.size = 1000;
    this.buckets = new Array(this.size);
  }

  _hash(key) {
    return key % this.size;
  }

  put(key, value) {
    const index = this._hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new ListNode(key, value);
    } else {
      let currentNode = this.buckets[index];

      while (currentNode) {
        if (currentNode.key === key) {
          currentNode.value = value;
          break;
        }

        if (!currentNode.next) {
          currentNode.next = new ListNode(key, value);
          break;
        }

        currentNode = currentNode.next;
      }
    }
  }

  get(key) {
    const index = this._hash(key);
    let currentNode = this.buckets[index];

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }

  remove(key) {
    const index = this._hash(key);
    let currentNode = this.buckets[index];
    let prevNode = null;

    while (currentNode) {
      if (currentNode.key === key) {
        if (prevNode) {
          prevNode.next = currentNode.next;
        } else {
          this.buckets[index] = currentNode.next;
        }
        break;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}
