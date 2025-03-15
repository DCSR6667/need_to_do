/**
 * brute force appraoch--O(n+n-k)
 * space complexity--O(1)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var len = (head) => {
  var temp = head;
  var count = 0;
  while (temp != null) {
    count += 1;
    temp = temp.next;
  }
  return count;
};
var removeNthFromEnd = function (head, n) {
  var pos = len(head) - n;
  var i = 1;
  var dummy = new ListNode(0, head);
  var temp = dummy;
  while (i <= pos) {
    temp = temp.next;
    i += 1;
  }
  temp.next = temp.next.next;
  return dummy.next;
};

/**
 * 
 * this- problem can be solved by slow and fast pointer---O(n)
space--O(1)

logic is move fast pointer to n places
and move then move fast and slow pointers upto fast.next is not None so that
slow pointer will  before of deleting node

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var dummy = new ListNode(0, head);
  var i = 1;
  var slow = dummy,
    fast = dummy;
  while (i <= n) {
    fast = fast.next;
    i += 1;
  }
  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
