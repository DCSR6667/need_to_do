/**
 * this problem can be solved by using hashset--O(n)
 * space complexity--O(n)
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var temp=head;
    var s=new Set();
    while(temp!=null)
    {
        if(!(s.has(temp)))
        {
            s.add(temp);
        }
        else
        {
            return true;
        }
        temp=temp.next;
    }
    return false;
};




/**
 * 
 * this problem can be solved by fast and slow pointers approach--O(n)
 * space complexity--O(1)
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow=head,fast=head;
    while(fast!=null && fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast)
        {
            return true;
        }
    }
    return false;
    
};