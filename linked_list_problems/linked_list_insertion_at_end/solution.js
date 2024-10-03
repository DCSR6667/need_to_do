/**
 * time complexity--O(n)
 * space complexity--O(1)
 * @param {Node} head
 * @param {number} newData
 * @returns {Node}

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    insertAtEnd(head, x) {
        // code here
        if(head==null)
        {
            head=new Node(x);
            return head;
        }
        var temp=head;
        while(temp.next!=null)
        {
            temp=temp.next;
        }
        temp.next=new Node(x);
        return head;
    }
}