'''
this problem can be solved by hashset---O(n)
space--O(1)
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        s=set()
        temp=head
        while temp:
            if temp  not in s:
                s.add(temp)
            else:
                return True
            temp=temp.next
        return False
    

'''
this problem can be solved by fast and slow pointers approach--O(n)
space---O(1)
'''

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow,fast=head,head
        while fast and fast.next:
            slow=slow.next
            fast=fast.next.next
            if slow is fast:
                return True
        return False
        
        