/**
 * this problem can be solved by fast and slow pointers and inplace
 * reversal---O(n+n/2)--O(n)
 * space complexity--O(1)
 * 
 * logic
 * ---------------->
 * this problem can be solved by 
    1..find the mid element
    2..reverse the elememts from mid to last
    3..update pointers
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var slow=head,fast=head;
    while(fast!=null && fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
    }

    

    var prev=null,curr=slow,nex=curr.next;
    while(curr!=null)
    {
        curr.next=prev;
        prev=curr;
        curr=nex;
        if(curr!=null)
        {
            nex=curr.next;

        }
        
    }

    

    var last=prev,lastb=last.next,first=head,second=first.next;
    while(lastb!=null)
    {
        first.next=last;
        last.next=second;
        first=second;
        second=second.next;
        last=lastb;
        lastb=lastb.next;
    }
    return head;
    
};