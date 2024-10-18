/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * this problem can be solved by inplace reversal --O(n+n)
 * space complexity--O(1)
 * logic
 * ----------------------------
 * find the kth node and make it as individual linked list by kthnode.next==null
 * if we find kth node then reversethe linked list and update pointers
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const reverse=(curr)=>
    {
        var prev=null,current=curr,nex=current.next;
        while(current!=null)
        {
            current.next=prev;
            prev=current;
            current=nex;
            if(nex!=null)
            {
                nex=nex.next;
            }
        }
    
    };
    
    const kth_node=(curr,k)=>
    {
        var count=1;
        var temp=curr;
        while(count<k && temp!=null)
        {
            temp=temp.next;
            count+=1;
    
        }
        return temp;
    }
    
    
    var reverseKGroup = function(head, k) {
        var curr=head,prev_last_node=null,next_linked_list=null,kthnode=null;
        while(curr!=null)
        {
            kthnode=kth_node(curr,k);
            if(kthnode==null)
            {
                if(prev_last_node!=null)
                {
                    prev_last_node.next=curr;
    
                }
                break;
            }
    
            next_linked_list=kthnode.next;
            kthnode.next=null;
    
            reverse(curr);
    
            if(curr==head)
            {
                head=kthnode;
            }
            else
            {
                prev_last_node.next=kthnode;
    
            }
            prev_last_node=curr;
            curr=next_linked_list;
    
        }
    
        return head;
        
    };