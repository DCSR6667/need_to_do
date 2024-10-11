/**
 * this problem can be solved by fast and slow pointers--O(n)
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
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head==null || head.next==null)
    {
        return null;
    }
    var slow=head,fast=head,temp=null;
    while(fast!=null && fast.next!=null)
    {
        temp=slow;
        slow=slow.next;
        fast=fast.next.next;
    }
    temp.next=slow.next;
    return head;
    
};