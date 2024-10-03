/**
 * time complexity----O(n)
 * space complexity---O(n)
 * class Node{
 *     constructor(data){
 *         this.data = data;
 *         this.next = null;
 *     }
 * }
 */

class Solution {
    // Function to construct linked list from given array.
    construct(arr) {
        // your code here
        var dummy=new Node(-1);
        var tail=dummy,new_node;
        
        var i=0;
        while(i<arr.length)
        {
            new_node=new Node(arr[i]);
            tail.next=new_node;
            tail=new_node;
            i+=1;
            
        
            
        }
        
        return dummy.next;
    }
}