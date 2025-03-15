/**
 * brute force approach --O(n+n)
 * space complexity--O(n)
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
var oddEvenList = function (head) {
  var odd_nodes = [],
    even_nodes = [];
  var i = 1;
  var temp = head;
  while (temp != null) {
    if (i % 2 == 0) {
      even_nodes.push(temp.val);
    } else {
      odd_nodes.push(temp.val);
    }
    i += 1;
    temp = temp.next;
  }

  temp = head;
  var i = 0;

  while (i < odd_nodes.length) {
    temp.val = odd_nodes[i];
    i += 1;
    temp = temp.next;
  }
  i = 0;
  while (i < even_nodes.length) {
    temp.val = even_nodes[i];
    i += 1;
    temp = temp.next;
  }

  return head;
};

/**
 *
 * this problem can be solved by two pointers approach--O(n)
 * space complexity------O(1)
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
var oddEvenList = function (head) {
  if (head == null || head.next == null || head.next.next == null) {
    return head;
  }
  var dummy = new ListNode(0, head);
  var oddtail = head,
    evenhead = head.next,
    eventail = evenhead;
  while (oddtail.next != null) {
    oddtail.next = eventail.next;
    if (oddtail.next == null) {
      break;
    }
    oddtail = oddtail.next;
    eventail.next = oddtail.next;
    eventail = eventail.next;
  }
  oddtail.next = evenhead;
  return dummy.next;
};
