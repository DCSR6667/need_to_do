'''
time--O(n)
space--O(1)
'''


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        temp=head
        while temp is not None and temp.next is not None:
            if temp.val==temp.next.val:
                temp1=temp.next
                temp.next=temp1.next
                temp1.next=None
            else:
                temp=temp.next
        return head
        