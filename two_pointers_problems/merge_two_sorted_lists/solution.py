
'''
this problem can be solved by taking two pointers one pointer on first 
list and second pointer on second list
time---O(n)
space--O(1)

'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        head=ListNode(0)
        tail=head
        while list1 and list2:
            if list1.val<list2.val:
                tail.next=list1
                tail=tail.next
                list1=list1.next
            else:
                tail.next=list2
                tail=tail.next
                list2=list2.next
        if list1:
            tail.next=list1
        if list2:
            tail.next=list2
        return head.next
        