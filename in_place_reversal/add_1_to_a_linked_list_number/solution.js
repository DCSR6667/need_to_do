/*
this problem can be solved by using inplace reveral--O(n+n+n)
space complexity---O(1)

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
  addOne(node) {
    // your code here
    var curr = node,
      prev = null,
      nex = curr.next;
    while (curr != null) {
      curr.next = prev;
      prev = curr;
      curr = nex;
      if (nex != null) {
        nex = nex.next;
      }
    }

    var temp = prev,
      mod,
      carry = 1,
      sum;
    while (prev != null) {
      sum = prev.data + carry;
      mod = sum % 10;
      carry = Math.floor(sum / 10);

      prev.data = mod;
      prev = prev.next;
    }

    (curr = temp), (prev = null), (nex = curr.next);

    while (curr != null) {
      curr.next = prev;
      prev = curr;
      curr = nex;
      if (nex != null) {
        nex = nex.next;
      }
    }

    if (carry != 0) {
      var newnode = new Node(carry);
      newnode.next = prev;
      prev = newnode;
    }

    return prev;
  }
}
