'''
this problem can be solved by 
1..find the mid element
2..reverse the elements from mid to last
3..and compare elements

time--O(n)
space--O(1)

'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow,fast=head,head
        while fast and fast.next:
            slow=slow.next
            fast=fast.next.next
        prev=None
        current=slow
        nex=current.next
        while current is not None:
            current.next=prev
            prev=current
            current=nex
            if nex is not None:
                nex=nex.next
        first=head
        last=prev
        while last is not None:
            if first.val!=last.val:
                return False
            else:
                first=first.next
                last=last.next
        return True

        