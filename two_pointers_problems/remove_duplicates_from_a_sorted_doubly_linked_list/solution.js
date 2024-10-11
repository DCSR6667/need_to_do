
/**
 * Node Class
 * @param {any} data - value stored in node
 * @class
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// this problem can be solved by two pointers approach---O(n)
// space complexity--O(1)

class Solution {
    /**
     * Function to remove duplicates from unsorted linked list.
     * @param {Node} head
     * @returns {Node}
     */
     removeDuplicates(head) {
         // code here
         // return head after editing list
         var temp=head;
         var curr=head.next;
         while(curr!=null)
         {
             if(curr.data==temp.data)
             {
                 temp.next=curr.next;
                 if(curr.next!=null)
                 {
                     curr.next.prev=temp;
                 }
                 curr=curr.next;
             }
             else
             {
                 temp=curr;
                 curr=curr.next;
             }
         }
         return head;
     }
}