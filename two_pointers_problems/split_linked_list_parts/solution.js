/**
 * time complexity---O(max(n,k))
 * space complexity----O(1)
 * logic
 * ----------------------------
 * with the help of 
 *  var actual_nodes_in_a_part=Math.floor(length/k);
    var extra_nodes=length%k;
    var total_no_of_nodes_in_a_part=actual_nodes_in_a_part+(extra_nodes>0?1:0);

    we can solve it 
    
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    var temp=head;
    var length=0;
    while(temp!=null)
    {
        length+=1;
        temp=temp.next;
    }
    
    
    var res=[];
    var actual_nodes_in_a_part=Math.floor(length/k);
    var extra_nodes=length%k;
    var curr=head,prev=null;
    var j=1;
    while(j<=k)
    {
        res.push(curr);
        var total_no_of_nodes_in_a_part=actual_nodes_in_a_part+(extra_nodes>0?1:0);
        extra_nodes-=1;
        var i=1;
        
        while(i<=total_no_of_nodes_in_a_part)
        {
            prev=curr;
            curr=curr.next;

            i+=1;
        }
    if(prev!=null)
    {
         prev.next=null;

    }
   
    j+=1;
      

    }

    return res;
      
};