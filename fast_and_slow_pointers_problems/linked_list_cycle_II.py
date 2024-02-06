'''
this problem can be solved by using hash set which takes--O(n)
space--O(n)
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        s=set()
        temp=head
        while temp:
            if temp not in s:
                s.add(temp)
            else:
                return temp
            temp=temp.next
        return temp
    

'''
this problem can be solved by fast and slow pointers--O(n)
space-O(1)

slow=l1+l2
fast=11+l2+ncycles

2(slow)=fast
2(l1+l2)=l1+l2+ncycles
l1=ncycles-l2

'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow,fast=head,head
        while fast and fast.next:
            slow=slow.next
            fast=fast.next.next
            if slow is fast:
                slow=head
                while slow is not fast:
                    slow=slow.next
                    fast=fast.next
                return slow
        