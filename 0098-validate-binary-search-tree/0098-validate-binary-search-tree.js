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
 * @return {boolean}
 */
const isValidBST = function(root) {
    let prev = null;

    function inorderTraversal(node) {
        if (node === null) {
            return true;
        }
        
        if (!inorderTraversal(node.left)) {
            return false;
        }

        if (prev !== null && prev >= node.val) {
            return false;
        }

        prev = node.val;

        return inorderTraversal(node.right);
    }

    return inorderTraversal(root);
};