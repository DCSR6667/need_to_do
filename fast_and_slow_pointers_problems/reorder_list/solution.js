/**
 * this problem can be solved by fast and slow pointers and inplace
 * reversal---O(n+n/2)--O(n)
 * space complexity--O(1)
 * 
 * logic
 * ---------------->
 * this problem can be solved by 
    1..find the mid element
    2..reverse the elememts from mid to last
    3..update pointers
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  var slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  var prev = null,
    nex = slow.next;
  while (slow != null) {
    slow.next = prev;
    prev = slow;
    slow = nex;
    if (nex != null) {
      nex = nex.next;
    }
  }

  var a = head,
    b = a.next,
    c = prev,
    d = c.next;
  while (d != null) {
    a.next = c;
    c.next = b;
    a = b;
    if (b != null) {
      b = b.next;
    }
    c = d;
    if (d != null) {
      d = d.next;
    }
  }
  return head;
};
