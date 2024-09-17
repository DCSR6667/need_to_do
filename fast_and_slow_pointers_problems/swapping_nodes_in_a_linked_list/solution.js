/**
 * this problem can be solved by fast and slow pointers--O(k+n-k)-->O(n)
 * space complexity--O(1)
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    var slow=head,fast=head,first=head;
    var i=1;
    while(i<k)
    {
        fast=fast.next;
        first=first.next;
        i+=1;
    }
    while(fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next;
    }
    var tmp=first.val;
    first.val=slow.val;
    slow.val=tmp;
    return head;
    
};