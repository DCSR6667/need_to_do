/**
 * this problem can be solved by inplace reversal--O(n)
 * space complexity--O(1)
 *
 * logic
 * =========
 * instead of doing curr.next=prev
 * do curr.next=nex.next so that it helps in traversing further nodes
 * and maintain a previous last node
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  var dummy = new ListNode(0, head);
  var prev = dummy,
    curr = head,
    nex = curr.next;
  while (curr != null && nex != null) {
    curr.next = nex.next;
    nex.next = curr;
    prev.next = nex;

    prev = curr;
    curr = curr.next;
    if (curr != null) {
      nex = curr.next;
    }
  }

  return dummy.next;
};

/* this problem can be solved by inplace reversal --O(n+n)
 * space complexity--O(1)
 * logic
 * ----------------------------
 * traverse to kth node and reverse the sublinked list and update pointers
 * repeat the above step */

var swapPairs = function (head) {
  var k = 2;

  if (head == null || k <= 1) {
    return head;
  }

  var start = head,
    end = head;
  var dummy = new ListNode(0, head),
    prev_last_node = dummy;
  while (start != null && start.next != null) {
    var i = 1;
    var temp = start;
    while (end != null && i <= k) {
      end = end.next;
      i += 1;
    }
    if (end == null && i <= k) {
      break;
    }
    var prev = null,
      nex = start.next;
    while (start != end) {
      start.next = prev;
      prev = start;
      start = nex;
      if (nex != null) {
        nex = nex.next;
      }
    }

    prev_last_node.next = prev;
    prev_last_node = temp;
  }

  if (start != null) {
    prev_last_node.next = start;
  }

  return dummy.next;
};
