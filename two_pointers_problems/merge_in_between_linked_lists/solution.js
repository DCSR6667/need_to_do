/**
 * this problem can be solved by two pointers approach--O(m+n)
 * space complexity---O(1)
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    var temp_a=list1,temp_b=list1;
    var tail=list2;
    while(tail.next!=null)
    {
        tail=tail.next;
    }
    var i=1;
    while(i<=(b+1))
    {
        if(i<a)
        {
            temp_a=temp_a.next;
        }
        temp_b=temp_b.next;
        i+=1;
    }

   
    temp_a.next=list2;
    tail.next=temp_b;
    return list1;
    
};