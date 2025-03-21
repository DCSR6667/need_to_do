/**
 * time complexity---O(n+n)
 * space complexity----O(1)
 * logic
 * ----------------------------
 * with the help of 
 *  var actual_nodes_in_a_part=Math.floor(length/k);
    var extra_nodes=length%k;
    var total_no_of_nodes_in_a_part=actual_nodes_in_a_part+(extra_nodes>0?1:0);

    we can solve it 
    
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var length = (temp) => {
  var count = 0;
  while (temp != null) {
    count += 1;
    temp = temp.next;
  }
  return count;
};
var splitListToParts = function (head, k) {
  var i = 1,
    len = length(head);
  var actual_nodes_in_a_part = Math.floor(len / k);
  var extra_nodes = len % k;
  var temp = head,
    prev = null;
  var arr = [];
  while (i <= k) {
    var total_no_of_nodes_in_a_part =
      actual_nodes_in_a_part + (extra_nodes > 0 ? 1 : 0);
    extra_nodes -= 1;
    arr.push(temp);

    var j = 1;
    while (temp != null && j <= total_no_of_nodes_in_a_part) {
      prev = temp;
      temp = temp.next;
      j += 1;
    }
    if (prev != null) {
      prev.next = null;
    }
    i += 1;
  }
  return arr;
};
