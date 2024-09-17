/**
 * 
 * this problem can be solved by two pointers --O(m+n)
 * space complexity----O(1)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var dummy=new ListNode();
    var tail=dummy;
    while(l1!=null && l2!=null)
    {
        if(l1.val<l2.val)
        {
            tail.next=l1;
            tail=tail.next;
            l1=l1.next;

        }
        else
        {
            tail.next=l2;
            tail=tail.next;
            l2=l2.next;

        }
    }

    if(l1!=null)
    {
        tail.next=l1;
    }
    if(l2!=null)
    {
        tail.next=l2;
    }
    return dummy.next;
    
};