'''
this problem can be solved by 

1..go to that position
2..revese the nodes
3..update pointers

time--O(n)
space--O(1)
'''


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        temp=None
        temp1=head
        i=1
        while i<left:
            temp=temp1
            temp1=temp1.next
            i+=1
        prev=None
        curr=temp1
        nex=curr.next
        i=1
        while i<=(right-left+1):
            curr.next=prev
            prev=curr
            curr=nex
            if nex is not None:
                nex=nex.next
            i+=1
        if temp is not None:
            temp.next=prev
        temp1.next=curr
        if temp is not None:
            return head
        else:
            return prev


        