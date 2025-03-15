/**
 *
 * this problem can be solved by two pointers--O(max(m,n))
 * space complexity--O(m+n)
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var temp1 = headA;
  var temp2 = headB;
  var hs = new Set();
  while (temp1 != null && temp2 != null) {
    if (hs.has(temp1)) {
      return temp1;
    } else {
      hs.add(temp1);
      temp1 = temp1.next;
    }
    if (hs.has(temp2)) {
      return temp2;
    } else {
      hs.add(temp2);
      temp2 = temp2.next;
    }
  }

  while (temp1 != null) {
    if (hs.has(temp1)) {
      return temp1;
    } else {
      hs.add(temp1);
      temp1 = temp1.next;
    }
  }
  while (temp2 != null) {
    if (hs.has(temp2)) {
      return temp2;
    } else {
      hs.add(temp2);
      temp2 = temp2.next;
    }
  }
};

/**
 *
 * this problem can be solved by two pointers---O(max(m,n)+max(m,n))
 * space complexity--O(1)
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
  var countA = 0,
    countB = 0;
  var temp1 = headA,
    temp2 = headB;
  while (temp1 != null || temp2 != null) {
    if (temp1 != null) {
      countA += 1;
      temp1 = temp1.next;
    }
    if (temp2 != null) {
      countB += 1;
      temp2 = temp2.next;
    }
  }
  var diff = Math.abs(countA - countB);
  var temp1, temp2;
  if (countA > countB) {
    temp1 = headA;
    temp2 = headB;
  } else {
    temp1 = headB;
    temp2 = headA;
  }
  var i = 1;
  while (i <= diff) {
    temp1 = temp1.next;
    i += 1;
  }
  while (temp1 != null && temp2 != null) {
    if (temp1 == temp2) {
      return temp1;
    }
    temp1 = temp1.next;
    temp2 = temp2.next;
  }
};
