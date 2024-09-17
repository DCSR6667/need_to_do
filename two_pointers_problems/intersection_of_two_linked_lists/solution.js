/**
 * 
 * this problem can be solved by two pointers--O(max(m,n))
 * space complexity--O(m+n)
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var s=new Set();
    while(headA!=null || headB!=null)
    {
        if(headA!=null)
        {
            if(!(s.has(headA)))
            {
                s.add(headA);
            }
            else
            {
                return headA;
            }

             headA=headA.next;

        }
        

        if(headB!=null)
        {
            if(!(s.has(headB)))
            {
                s.add(headB);
            }
            else
            {
                return headB;
            }

              headB=headB.next;

        }

       
      
        
    }

    return null;
    
};





/**
 * 
 * this problem can be solved by two pointers---O(max(m,n)+max(m,n))
 * space complexity--O(1)
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {

    var first=headA;
    var second=headB;
    var lenA=0,lenB=0,pos;

    while(first!=null || second!=null)
    {
        if(first!=null)
        {
            lenA+=1;
            first=first.next;
        }
        if(second!=null)
        {
            lenB+=1;
            second=second.next;
        }
    }

    first=headA;
    second=headB;

    if(lenA>lenB)
    {
        pos=lenA-lenB;
        var i=1;
        
        while(i<=pos)
        {
            first=first.next;
            i+=1;

        }

    }
    else
    {
        pos=lenB-lenA;
        var i=1;
      
        while(i<=pos)
        {
            second=second.next;
            i+=1;

        }

    }

    while(first!=second)
    {
        first=first.next;
        second=second.next;
    }
    return first;


    
};