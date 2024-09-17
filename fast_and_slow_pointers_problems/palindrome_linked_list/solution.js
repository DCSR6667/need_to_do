/**
 * logic
 * -----------
 * 1.find the middle element;
 * 2.reverse the linked list from middle ele to last ele
 * 3.compare elements
 * 
 * time complexity--O(n/2+n/2+n/2)
 * space complexity---O(1)
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var slow=head,fast=head;
    while(fast!=null && fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
    }

    var prev=null;
    var curr=slow;
    var nex=curr.next;
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

    var temp=head;
    while(prev!=null)
    {
        if(temp.val!=prev.val)
        {
            return false;
        }
        prev=prev.next;
        temp=temp.next;
    }
    return true;
    
};