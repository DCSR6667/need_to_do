/*

this problem can be solved by two pointers problem----O(n)
space complexity---O(1)


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
*/

class Solution {
    // Function to insert a new node at given position in doubly linked list.
    addNode(head, p, x) {
        // your code here
        var t1=null;
        var t2=head;
        var i=0;
        while(i<=p)
        {
            t1=t2;
            t2=t2.next
            i+=1;
        }
        var new_node=new Node(x);
        new_node.next=t2;
        new_node.prev=t1;
        t1.next=new_node;
        if(t2!=null)
        {
        t2.prev=new_node;
        }
        return head;
    }
}