'''
first find the length and then find mid based on lengh--(n+n/2)
space-O(1)

'''

class Solution:
    def length(self,head):
        temp=head
        count=0
        while temp:
            count+=1
            temp=temp.next
        return count
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        mid=self.length(head)//2
        temp=head
        i=0
        while i<mid:
            temp=temp.next
            i+=1
        return temp







'''
this problem can be solved by fast and slow pointers---O(n/2)
space--O(1)
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow,fast=head,head
        while fast and fast.next:
            slow=slow.next
            fast=fast.next.next
        return slow
        