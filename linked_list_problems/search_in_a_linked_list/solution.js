/**
 * time complexity-----O(n)
 * space complexity--O(1)
 * Node of a linked list
 * class Node {
 *     constructor(data){
 *         this.data = data;
 *         this.next = null;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} n
     * @param {Node} head
     * @param {number} key
     * @returns {boolean}
    */
    searchKey(n, head, key) {
        // Code here
        var temp=head;
        while(temp!=null)
        {
            if(temp.data==key)
            {
                return 1;
            }
            temp=temp.next;
        }
        return 0;
    }
}