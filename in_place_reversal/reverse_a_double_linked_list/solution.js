/*class DLLNode {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
*/

/**
 * this problem can be solved by inplace reversal of linked list---O(n)
 * space complexity ----O(1)
 * @param {DLLNode} head
 * @return {DLLNode}
 */

class Solution {
    reverseDLL(head) {
        // code here
        
        if(head==null || head.next==null)
        {
            return head;
        }
        
        var prev=null;
        var curr=head;
        var nex=curr.next;
        
        while(curr!=null)
        {
            curr.next=prev;
            curr.prev=nex;
            prev=curr;
            curr=nex;
            if(nex!=null)
            {
                nex=nex.next;
            }
        }
        
        return prev;
    }
}





/*class DLLNode {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
*/

/**
 * this problem can be solved by swapping the prev and next links --O(n)
 * space complexity--O(1)
 * @param {DLLNode} head
 * @return {DLLNode}
 */

class Solution {
    reverseDLL(head) {
        // code here
        if(head==null || head.next==null)
        {
            return head;
        }
        
        var curr=head,temp;
        while(curr!=null)
        {
            temp=curr.prev;
            curr.prev=curr.next;
            curr.next=temp;
            curr=curr.prev;
        }
        
        return temp.prev;
    }
}
