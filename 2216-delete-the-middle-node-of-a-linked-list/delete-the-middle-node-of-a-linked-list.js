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
function deleteMiddle(head) {
	if (!head || !head.next) {
		return null;
	}

	let length = 0;
	let current = head;

	while (current) {
		length++;
		current = current.next;
	}

	let middleIndex = Math.floor(length / 2) - 1;

	current = head;

	for (let i = 0; i < middleIndex; i++) {
		current = current.next;
	}

	current.next = current.next.next;
	return head;
}
