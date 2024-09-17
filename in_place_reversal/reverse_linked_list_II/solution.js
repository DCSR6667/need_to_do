/**
 * this problem can be solved by inplace reversal
 * time complexity----O(right+(right-left+1))
 * space complexity----O(1)
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */


var reverseBetween = function(head, left, right) {

    if(right-left==0)
    {
        return head;
    }

    var lprev=null,l=head;
    var i=1;

    while(i<left)
    {
        i+=1;
        lprev=l;
        l=l.next;
    }

    var r=l.next,rnex=r.next,i=1;
    while(i<(right-left))
    {
        i+=1;
        r=rnex;
        if(rnex!=null)
        {
             rnex=rnex.next;

        }
       
    }
    

    var prev=null,curr=l,nex=curr.next;
    while(curr!=rnex)
    {
        curr.next=prev;
        prev=curr;
        curr=nex;
        if(nex!=null)
        {
            nex=nex.next;
        }
    }
    if(lprev!=null)
    {
        lprev.next=prev;

    }
    
    l.next=rnex;
    if(lprev==null)
    {
        return prev;
    }

    return head;


    
};






/**
 * 
 * this problem can be solved by inplace reversal--O(right)
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

    var dummy=new ListNode(0,head);
    var lprev=dummy,l=head;
    var i=1;
    while(i<left)
    {
        i+=1;
        lprev=l;
        l=l.next;
    }
    i=1;
    var prev=null,curr=l,nex=curr.next;
    while(i<=(right-left+1))
    {
        curr.next=prev;
        prev=curr;
        curr=nex;
        if(nex!=null)
        {
            nex=nex.next;
        }
        i+=1;

    }

    lprev.next=prev;
    l.next=curr;
    return dummy.next;
    
};