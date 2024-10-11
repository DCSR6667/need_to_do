
/*
this problem can be solved by using inplace reveral--O(n+n+n)
space complexity---O(1)

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution 
{

    reverse(node)
    {
        if(node==null || node.next==null)
        {
            return node;
            
        }
        var prev=null,nex=node.next;
        while(node!=null)
        {
            node.next=prev;
            prev=node;
            node=nex;
            if(nex!=null)
            {
                nex=nex.next;
            }
        }
        
        return prev;
        
    }
    addOne(node) {
        // your code here
        var new_head=this.reverse(node);
        
        var carry=1,temp=new_head;
        
        while(temp!=null && carry!=0)
        {
            var sum=temp.data+carry;
            var rem=sum%10;
            var carry=Math.floor(sum/10);
            temp.data=rem;
            temp=temp.next;
            
        }
        node=this.reverse(new_head);
        if(carry!=0)
        {
            var new_node=new Node(1);
            new_node.next=node;
            node=new_node;
        }
        return node;
        
        
    }
}
