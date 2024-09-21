/**
 * brute force approach--O(nlogn+n)
 * space complexity--O(n)
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
var sortList = function(head) {
    var temp=head;
    var arr=[];
    while(temp!=null)
    {
        arr.push(temp.val);
        temp=temp.next;

    }
    arr.sort((a,b)=>a-b);
    var i=0;
    temp=head;
    while(temp!=null)
    {
        temp.val=arr[i];
        i+=1;
        temp=temp.next;
    }
    return head;
    
};







/**
 * this problem can be solved by using merge sort--O(nlogn)
 * space complexity---O(1)
 * 
 * internally finding middle element and 
 * merging two lists is used to solve this problem
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

const get_middle=(head)=>
    {
        var slow=head,fast=head.next;
        while(fast!=null && fast.next!=null)
        {
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;
    
    };
    
    var merge=(left,right)=>
    {
        var dummy=new ListNode(0),temp=dummy;
        while(left!=null && right!=null)
        {
            if(left.val<right.val)
            {
                temp.next=left;
                temp=left;
                left=left.next;
            }
            else
            {
                temp.next=right;
                temp=right;
                right=right.next;
            }
            
    
        }
    
        if(left!=null)
        {
            temp.next=left;
    
        }
    
        if(right!=null)
        {
            temp.next=right;
    
        }
    
        return dummy.next;
    
    };
    
    
    var sortList = function(head) {
        if(head==null || head.next==null)
        {
            return head;
        }
        var middle=get_middle(head);
        var temp=middle.next;
        middle.next=null;
        var left=sortList(head);
        var right=sortList(temp);
        return merge(left,right);
        
        
    };