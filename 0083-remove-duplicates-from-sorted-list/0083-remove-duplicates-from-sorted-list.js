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
    
    const values = new Map();
    let current = head;
    
    while (current) {
        values.set(current.val, true);
        current = current.next;
    }
    
    const dummy = new ListNode(0);
    let tail = dummy;
    
    for (let [val, exists] of values) {
        if (exists) {
            tail.next = new ListNode(val);
            tail = tail.next;
        }
    }
    
    return dummy.next;
};
