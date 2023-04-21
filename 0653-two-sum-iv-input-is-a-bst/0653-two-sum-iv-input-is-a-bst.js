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
  return dfs(root, new Set(), k);
}

function dfs(node, visited, k) {
  if (node === null) {
    return false;
  }

  if (visited.has(k - node.val)) {
    return true;
  }

  visited.add(node.val);
  return dfs(node.left, visited, k) || dfs(node.right, visited, k);
}
