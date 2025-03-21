// User function Template for javascript
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

// this problem can be solved by two pointers approach---O(n+n)
// space complexity---O(1)
class Solution {
  // Function to find pairs in the linked list with the given sum
  findPairsWithGivenSum(head, target) {
    // code here
    var arr = [];
    var low = head,
      high = head;
    while (high.next != null) {
      high = high.next;
    }

    while (low != high && low.prev != high) {
      var sum = low.data + high.data;
      if (sum > target) {
        high = high.prev;
      } else if (sum < target) {
        low = low.next;
      } else {
        arr.push([low.data, high.data]);
        low = low.next;
        high = high.prev;
      }
    }
    return arr;
  }
}
