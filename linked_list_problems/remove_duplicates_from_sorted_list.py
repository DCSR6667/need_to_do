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
        dummy=None
        while temp:
            if dummy is None:
                dummy=temp
                temp=temp.next
            elif dummy.val==temp.val:
                dummy.next=temp.next
                temp.next=None
                temp=dummy.next
            else:
                dummy=temp
                temp=temp.next
        return head