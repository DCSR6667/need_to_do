/**
 * this problem can be solved by fast and slow pointers and inplace
 * reversal---O(n/2+n/2+n/2)==O(n)
 * space complexity-O(1)
 * 
 * logic---
 * -------------->
 * 1..find the mid element
    2..reverse the elememts from mid to last
    3..and update max_sum
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  var slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  var max_sum = -Infinity,
    prev = null,
    nex = slow.next;
  while (slow != null) {
    slow.next = prev;
    prev = slow;
    slow = nex;
    if (nex != null) {
      nex = nex.next;
    }
  }
  slow = head;
  var sum;
  while (prev != null) {
    sum = prev.val + slow.val;
    if (sum > max_sum) {
      max_sum = sum;
    }
    prev = prev.next;
    slow = slow.next;
  }
  return max_sum;
};

/**
 * 
 * this problem can be solved by fast and slow pointers and inplace
 * reversal---O(n/2+n/2)==O(n)
 * space complexity-O(1)
 * 
 * logic---
 * -------------->
 * 1..finding the mid element and reversing the elememts from first to mid is done at once
    2..and update max_sum
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
 * @return {number}
 */
var pairSum = function (head) {
  var slow = head,
    fast = head,
    prev = null,
    nex = slow.next,
    max_sum = -Infinity;

  while (fast != null) {
    fast = fast.next.next;
    slow.next = prev;
    prev = slow;
    slow = nex;
    if (nex != null) {
      nex = nex.next;
    }
  }

  var sum;
  while (slow != null) {
    sum = slow.val + prev.val;
    if (sum > max_sum) {
      max_sum = sum;
    }
    slow = slow.next;
    prev = prev.next;
  }
  return max_sum;
};
