'''
this problem can be solved by 
1..find the mid element
2..reverse the elememts from mid to last
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
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        if head is None or head.next is None:
            return
        slow,fast=head,head
        while fast and fast.next:
            slow=slow.next
            fast=fast.next.next
        prev=None
        curr=slow
        nex=curr.next
        while curr is not None:
            curr.next=prev
            prev=curr
            curr=nex
            if nex is not None:
                nex=nex.next
        i=head
        j=prev
        dummy=ListNode(0)
        tail=dummy
        while i is not j and i is not None and j is not None:
            tail.next=i
            i=i.next
            tail=tail.next
            tail.next=j
            j=j.next
            tail=tail.next
        return dummy.next


        