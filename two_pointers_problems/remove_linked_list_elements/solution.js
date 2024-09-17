/**
 * this problem can be solved by two pointers approach--O(n)
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head==null)
    {
        return head;
    }
    var temp2=head;
    var temp1=null;

    while(temp2!=null)
    {
        if(temp2.val==val)
        {
            if(head==temp2)
            {
                temp2=temp2.next;
                head=temp2;
            }
            else
            {
                temp1.next=temp2.next;
                temp2=temp2.next

            }
            
        }
        else
        {
            temp1=temp2;
            temp2=temp2.next;
        }

    }

    return head;
    
};