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
        var dummy_0=new Node(-1);
        var dummy_1=new Node(-1);
        var dummy_2=new Node(-1);
        var tail_0=dummy_0,tail_1=dummy_1,tail_2=dummy_2;
        var temp=head;
        while(temp!=null)
        {
            if(temp.data==0)
            {
                tail_0.next=temp;
                temp=temp.next;
                tail_0=tail_0.next;
                
            }
            else if(temp.data==1)
            {
                tail_1.next=temp;
                temp=temp.next;
                tail_1=tail_1.next;
                
            }
            else
            {
                tail_2.next=temp;
                temp=temp.next;
                tail_2=tail_2.next;
                
            }
            
        }
        tail_0.next=(dummy_1!=tail_1)?dummy_1.next:dummy_2.next;
        tail_1.next=dummy_2.next;
        tail_2.next= null;f
        return dummy_0.next;
    }
}
 