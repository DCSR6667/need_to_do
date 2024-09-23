/**
 * this problem can be solved by two pointers approach--O(max(m,n))
 * space complexity---O(max(m,n))
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummy=new ListNode(0);
    var tail=dummy;
    var sum,carry=0,rem,new_node,val1,val2;
    while(l1!=null || l2!=null)
    {
        val1=(l1!=null)?l1.val:0;
        val2=(l2!=null)?l2.val:0;
        sum=val1+val2+carry;
        carry=Math.floor(sum/10);
        rem=sum%10;
        new_node=new ListNode(rem);
        tail.next=new_node;
        tail=tail.next;
        if(l1!=null)
        {
            l1=l1.next;
        }
        if(l2!=null)
        {
            l2=l2.next;
        }

    }

    if(carry!=0)
    {
        new_node=new ListNode(carry);
        tail.next=new_node;
        tail=tail.next;
    }

    return dummy.next;
    
};