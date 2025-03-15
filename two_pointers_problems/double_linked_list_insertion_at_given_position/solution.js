// User function Template for javascript

/**
 * this problem can be solved by two pointers--O(n)
 * @param {Node} head
 * @param {number} pos
 * @param {number} data
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
*/

class Solution {
  // Function to insert a new node at given position in doubly linked list.
  addNode(head, p, x) {
    // your code here
    var newnode = new Node(x);
    if (head == null) {
      head = newnode;
      return head;
    }
    var temp = head,
      i = 0;
    while (i < p) {
      temp = temp.next;
      i += 1;
    }
    if (temp.next != null) {
      temp.next.prev = newnode;
    }
    newnode.next = temp.next;
    temp.next = newnode;
    newnode.prev = temp;
    return head;
  }
}
