/*
brute force approach----O(n+n)
space complexity--O(1)

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to sort a linked list of 0s, 1s and 2s.
    segregate(head) {
        // your code here
        var count_0=0,count_1=0,count_2=0;
        var temp=head;
        while(temp!=null)
        {
            if(temp.data==0)
            {
                count_0+=1;
            }
            else if(temp.data==1)
            {
                count_1+=1;
            }
            else
            {
                count_2+=1;
            }
            
            temp=temp.next;
        }
        
        temp=head;
        while(temp!=null)
        {
            if(count_0>0)
            {
                temp.data=0;
                count_0-=1;
            }
            else if(count_1>0)
            {
                temp.data=1;
                count_1-=1;
            }
            else
            {
                temp.data=2;
                count_2-=1
            }
            
            temp=temp.next;
        }
        return head
    }
}











/**
 * this problem can be solved dutch national flag like 
 taking three pointers ---O(n)

 space complexity--O(1)
**/



/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to sort a linked list of 0s, 1s and 2s.
    segregate(head) {
        // your code here
        var dummy_0=new Node(-1),temp_0=dummy_0
        var dummy_1=new Node(-1),temp_1=dummy_1;
        var dummy_2=new Node(-1),temp_2=dummy_2;
        
        while(head!=null)
        {
            var new_node=new Node(head.data);
            if(head.data==0)
            {
                temp_0.next=new_node;
                temp_0=new_node;
                
            }
            else if(head.data==1)
            {
                temp_1.next=new_node;
                temp_1=new_node;
            }
            else
            {
                temp_2.next=new_node;
                temp_2=new_node;
            }
            head=head.next;
        }
        
        temp_0.next=(dummy_1.next!=null)?dummy_1.next:dummy_2.next;
        temp_1.next=dummy_2.next;
        
        return dummy_0.next;
    }
}
 