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
const postorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    
    const left = postorderTraversal(root.left);
    const right = postorderTraversal(root.right);
    
    return [...left, ...right, root.val];
};