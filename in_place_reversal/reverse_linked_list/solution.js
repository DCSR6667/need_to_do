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





/**
 * can u do it in using one pointer--yes we can using recursion--O(n)
 * hint--->go to last node and while returning update pointers
 * space complexity---O(n)
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
    var new_head=reverseList(head.next);
    var x=head.next;
    x.next=head;
    head.next=null;
    return new_head;
    
};












