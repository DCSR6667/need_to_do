/**
 * this problem can be solved by fast and slow pointers--O(n+n+k)
 * space complexity--O(1)
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
    
    var rotateRight = function(head, k) {
    
        k=k%(length(head));
    
        if(k==0 || head==null || head.next==null)
        {
            return head;
        }
    
        var dummy=new ListNode(0,head);
        var slow=head,fast=head;
        var i=1;
        while(i<=k)
        {
            fast=fast.next;
            i+=1;
        }
    
        var prev=dummy;
        while(fast!=null)
        {
            prev=slow;
            slow=slow.next;
            fast=fast.next;
        }
    
        var last=slow;
        while(last.next!=null)
        {
            last=last.next;
        }
    
        prev.next=null;
        last.next=dummy.next;
        dummy.next=slow;
        return dummy.next;
    
    
        
    };



/**
 * time complexity---O(n+(n-k))
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

var rotateRight = function(head, k) {

    if(head==null || head.next==null)
    {
        return head;
    }


    var tail=head;
    var count=1;
    while(tail.next!=null)
    {
        count+=1;
        tail=tail.next;
    }
    k=k%count;
    if(k==0)
    {
        return head;
    }

    var dummy=new ListNode(0,head),pos=count-k,prev=dummy,curr=head,i=1;
    while(i<=pos)
    {
        prev=curr;
        curr=curr.next;
        i+=1;
    }
    prev.next=null;
    tail.next=dummy.next;
    dummy.next=curr;
    return dummy.next;
    



    
};