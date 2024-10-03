/**
 * time complexity----O(n)
 * space complexity--O(1)
 * @param {Node} head
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to count nodes of a linked list.
    getCount(head) {
        // Code here
        var temp=head,count=0;
        while(temp!=null)
        {
            count+=1;
            temp=temp.next;
        }
        return count;
    }
}