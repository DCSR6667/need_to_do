/**
 * this problem can be solved by in place reversal--O(n)
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
var reverseList = function(head) {
    if(head==null || head.next==null)
    {
        return head;
    }
    var prev=null;
    var curr=head;
    var nex=head.next;
    while(curr!=null)
    {
        curr.next=prev;
        prev=curr;
        curr=nex;
        if(nex!=null)
        {
            nex=nex.next;

        }
        
    }
    return prev;

    
};