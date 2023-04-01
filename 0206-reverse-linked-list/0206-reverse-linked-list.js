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
const reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let reversedList = null;
    while (head) {
        reversedList = { val: head.val, next: reversedList };
        head = head.next;
    }
    
    return reversedList;
};


