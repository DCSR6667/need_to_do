/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
    this.bottom = null;
  }
}
*/

// this problem can be sloved by two pointers it used merging
// of two sorted list concept--O(m*(n+n))
// space complexity--O(1)

class Solution {
  flatten(root) {
    // your code here
    if (root == null || root.next == null) {
      return root;
    }
    var temp1 = root,
      temp2 = root.next,
      nex = temp2.next;
    while (temp2 != null) {
      var dummy = new Node(-1),
        newnode = dummy;
      while (temp1 != null && temp2 != null) {
        if (temp1.data < temp2.data) {
          newnode.bottom = temp1;
          newnode = temp1;
          temp1 = temp1.bottom;
        } else {
          newnode.bottom = temp2;
          newnode = temp2;
          temp2 = temp2.bottom;
        }
      }

      if (temp1 != null) {
        newnode.bottom = temp1;
      }
      if (temp2 != null) {
        newnode.bottom = temp2;
      }

      temp1 = dummy.bottom;
      temp2 = nex;
      if (nex != null) {
        nex = nex.next;
      }
    }

    return dummy.bottom;
  }
}

/**
 * this problem can be solved by recursion and merging of twoo sorted lists--O(m*(n+n))
 * space complexity--O(m)
 * @param {Node} head
 * @return {Node}
 */

class Solution {
  merge_two_sorted_lists(l1, l2) {
    var dummy = new Node(-1);
    var tail = dummy;
    while (l1 != null && l2 != null) {
      if (l1.data < l2.data) {
        tail.bottom = l1;
        tail = l1;
        l1 = l1.bottom;
        tail.next = null;
      } else {
        tail.bottom = l2;
        tail = l2;
        l2 = l2.bottom;
        tail.next = null;
      }
    }

    if (l1 != null) {
      tail.bottom = l1;
    }
    if (l2 != null) {
      tail.bottom = l2;
    }
    return dummy.bottom;
  }
  flatten(head) {
    // your code here

    if (head == null || head.next == null) {
      return head;
    }
    var merge_head = this.flatten(head.next);
    return this.merge_two_sorted_lists(head, merge_head);
  }
}
