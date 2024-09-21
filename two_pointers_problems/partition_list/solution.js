/**
 * 
 * this problem can be solved by two pointers---O(n)
 * space complexity----O(1)
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
 * @param {number} x
 * @return {ListNode}
 */


var partition = function(head, x) {
    var temp=head;
    var dummy_left=new ListNode(0),left=dummy_left;
    var dummy_right=new ListNode(0),right=dummy_right;
    while(temp!=null)
    {
        if(temp.val<x)
        {
            left.next=temp;
            left=temp;
            temp=temp.next;
            left.next=null;
        }
        else
        {
            right.next=temp;
            right=temp;
            temp=temp.next;
            right.next=null;
        }
    }
    left.next=dummy_right.next;
    return dummy_left.next;

    
};