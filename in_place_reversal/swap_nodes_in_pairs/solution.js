/**
 * this problem can be solved by inplace reversal--O(n)
 * space complexity--O(1)
 * 
 * logic
 * =========
 * instead of doing curr.next=prev
 * do curr.next=nex.next so that it helps in traversing further nodes
 * 
 * 
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
var swapPairs = function(head) {

    if(head==null || head.next==null)
    {
        return head;
    }

    var dummy=new ListNode(0,head);
    var prev=dummy,curr=head,nex=curr.next;
    while(curr!=null && nex!=null)
    {
        curr.next=nex.next;
        nex.next=curr;
        prev.next=nex;

        prev=curr;
        curr=curr.next;
        if(curr!=null)
        {
            nex=curr.next;
        }


    }

    return dummy.next;
    
};