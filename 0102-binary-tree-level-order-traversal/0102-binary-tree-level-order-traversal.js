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
 * @return {number[][]}
 */
const levelOrder = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];
    let start = 0;
    let end = 1;

    while (start < end) {
        const levelSize = end - start;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue[start++];
            currentLevel.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
                end++;
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
                end++;
            }
        }

        result.push(currentLevel);
    }

    return result;
};