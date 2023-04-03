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
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    var res = [];
    inorder(root, res);
    return res;
};

const inorder = function(root, res) {
    if (root !== null) {
        inorder(root.left, res);
        res.push(root.val);
        inorder(root.right, res);
    }
};