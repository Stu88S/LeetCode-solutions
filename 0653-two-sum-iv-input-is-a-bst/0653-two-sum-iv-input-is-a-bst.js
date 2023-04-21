/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function BSTIterator(root, ascending = true) {
  this.stack = [];
  this.ascending = ascending;
  let node = root;
  while (node) {
    this.stack.push(node);
    node = this.ascending ? node.left : node.right;
  }
}

BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

BSTIterator.prototype.next = function () {
  let node = this.stack.pop();
  let value = node.val;
  node = this.ascending ? node.right : node.left;

  while (node) {
    this.stack.push(node);
    node = this.ascending ? node.left : node.right;
  }

  return value;
};

function findTarget(root, k) {
  if (!root) return false;

  let leftIterator = new BSTIterator(root, true);
  let rightIterator = new BSTIterator(root, false);
  let left = leftIterator.next();
  let right = rightIterator.next();

  while (left < right) {
    const sum = left + right;
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left = leftIterator.next();
    } else {
      right = rightIterator.next();
    }
  }

  return false;
}
