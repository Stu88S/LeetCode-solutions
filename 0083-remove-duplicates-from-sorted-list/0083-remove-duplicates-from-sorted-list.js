/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }
    
    const values = [];
    
    while (head) {
        if (!values.includes(head.val)) {
            values.push(head.val);
        }
        head = head.next;
    }
    
    return values.reduceRight((next, val) => ({ val, next }), null);
};
