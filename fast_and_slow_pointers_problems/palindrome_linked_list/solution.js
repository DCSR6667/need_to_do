/**
 * logic
 * -----------
 * 1.find the middle element;
 * 2.reverse the linked list from middle ele to last ele
 * 3.compare elements
 *
 * time complexity--O(n/2+n/2+n/2)
 * space complexity---O(1)
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var reverse = (head) => {
  if (head == null || head.next == null) {
    return head;
  }
  var curr = head,
    prev = null,
    nex = head.next;
  while (curr != null) {
    curr.next = prev;
    prev = curr;
    curr = nex;
    if (nex != null) {
      nex = nex.next;
    }
  }
  return prev;
};

var isPalindrome = function (head) {
  if (head == null || head.next == null) {
    return true;
  }

  var slow = head,
    fast = head,
    temp = null;

  while (fast != null && fast.next != null) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  temp.next = null;
  var revhead = reverse(slow);
  while (head != null) {
    if (head.val != revhead.val) {
      return false;
    }
    revhead = revhead.next;
    head = head.next;
  }
  return true;
};
