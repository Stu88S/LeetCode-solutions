/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  if (head === null) {
    return null;
  }
  
  let previous = null;
  
  for (let current = head; current !== null; current = current.next) {
    if (current.val === val) {
      if (previous === null) {
        head = current.next;
      } else {
        previous.next = current.next;
      }
    } else {
      previous = current;
    }
  }
  
  return head;
}
