
// User function Template for javascript
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

// this problem can be solved by two pointers approach---O(n+n)
// space complexity---O(1)

class Solution {
    // Function to find pairs in the linked list with the given sum
    findPairsWithGivenSum(head, target) {
        // code here
        var arr=[];
        var first=head;
        var last=first;
        while(last.next!=null)
        {
            last=last.next;
        }
        while(first!=last && last.next!=first)
        {
            if(first.data+last.data==target)
            {
                arr.push([first.data,last.data]);
                first=first.next;
                last=last.prev;
            }
            else if(first.data+last.data>target)
            {
                last=last.prev;
            }
            else
            {
                first=first.next;
            }
        }
        
        return arr;
    }
}