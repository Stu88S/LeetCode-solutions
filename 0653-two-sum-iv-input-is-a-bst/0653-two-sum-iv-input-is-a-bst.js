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
function findTarget(root, k) {
  const values = inOrder(root);
  let left = 0;
  let right = values.length - 1;

  while (left < right) {
    const sum = values[left] + values[right];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

function inOrder(node) {
  if (node === null) {
    return [];
  }

  const left = inOrder(node.left);
  const right = inOrder(node.right);
  return [...left, node.val, ...right];
}
