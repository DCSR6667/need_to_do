/**
 * this problem can be solved by two pointers--O(n)
 * space complexity------O(1)
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head==null || head.next==null)
    {
        return head;
    }

    var prev=head;
    var curr=head.next;
    while(curr!=null)
    {
        if(prev.val==curr.val)
        {
            prev.next=curr.next;
            curr=curr.next;
        }
        else
        {
            prev=curr;
            curr=curr.next;
        }
    }
    
    return head;
};




/**
 * this problem can be solved by single pointer--O(n)
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head==null || head.next==null)
    {
        return head;
    }

  var curr=head;
  while(curr!=null)
  {
    while(curr.next!=null && curr.val==curr.next.val)
    {
        curr.next=curr.next.next;
    }
    curr=curr.next;
  }
    
    return head;
};