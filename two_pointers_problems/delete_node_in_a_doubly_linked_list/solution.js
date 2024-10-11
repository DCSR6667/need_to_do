
/**
 * this problem can be solved by two pointers ----O(n)
 * space complexity--O(1)
 * @param {Node} head
 * @param {int} x
 * @return {Node}
 */

class Solution {
    deleteNode(head, x) {
        // code here
        
        var dummy=new Node(-1);
        dummy.next=head;
        var temp=dummy,curr=head;
        var i=1;
        while(i<x)
        {
            temp=curr;
            curr=curr.next;
            i+=1;
        }
        
        temp.next=curr.next;
        if(curr.next!=null)
        {
            curr.next.prev=temp;
        }
        if(dummy.next!=null)
        {
             dummy.next.prev=null;
            
        }
       
        return dummy.next;
    }
}