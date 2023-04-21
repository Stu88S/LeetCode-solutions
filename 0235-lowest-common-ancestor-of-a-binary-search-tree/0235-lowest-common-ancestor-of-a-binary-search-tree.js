/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    let currentNode = root;

    while (currentNode !== null) {
        if (p.val < currentNode.val && q.val < currentNode.val) {
            currentNode = currentNode.left;
        } else if (p.val > currentNode.val && q.val > currentNode.val) {
            currentNode = currentNode.right;
        } else {
            return currentNode;
        }
    }

    return null;
};