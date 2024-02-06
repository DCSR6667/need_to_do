
'''at every time go to one node and change link--O(n)
space--O(1)
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev=None
        temp=head
        if head is not None: 
            temp1=head.next
        while temp is not None:
            temp.next=prev
            prev=temp
            temp=temp1
            if temp1 is not None:
                temp1=temp1.next
        return prev