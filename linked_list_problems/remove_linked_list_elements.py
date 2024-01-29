
'''
time ---O(n)
space--O(1)
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        temp=head
        dummy=None
        while temp:
            if temp.val==val:
                if temp is head:
                    head=head.next
                    temp.next=None
                    temp=head
                else:
                    dummy.next=temp.next
                    temp.next=None
                    temp=dummy.next
            else:
                dummy=temp
                temp=temp.next
        return head
        