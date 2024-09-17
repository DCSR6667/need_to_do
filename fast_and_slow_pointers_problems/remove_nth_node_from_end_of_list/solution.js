/**
 * brute force appraoch--O(n+n-k)
 * space complexity--O(1)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var length=(head)=>
    {
        var temp=head;
        var count=0;
        while(temp!=null)
        {
            count+=1;
            temp=temp.next;
        }
        return count;
       
    
    };
    
    var removeNthFromEnd = function(head, n) {
    
        var len=length(head);
       
    
        var pos=len-n;
    
        if(pos==0)
        {
            return head.next;
        }
        var i=1;
        var temp1=head;
        while(i<pos)
        {
            temp1=temp1.next;
            i+=1;
    
        }
        
    
        var temp2=temp1.next;
        temp1.next=temp2.next;
    
        return head;
    
        
    };



/**
 * 
 * this- problem can be solved by slow and fast pointer---O(n)
space--O(1)

logic is move fast pointer to n places
and move then move fast and slow pointers upto fast.next is not None so that
slow pointer will  before of deleting node

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    
    var slow=head,fast=head;
    var i=1;
    while(i<=n)
    {
        fast=fast.next;
        i+=1;
    }
    if(fast==null)
    {
        return head.next;
    }
    while(fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next;
    }
    var temp=slow.next;
    slow.next=temp.next;
    return head;
    
};