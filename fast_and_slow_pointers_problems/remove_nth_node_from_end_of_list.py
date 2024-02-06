'''
loc=length-n
go to that location and delete it---O(n+n)
space--O(1)
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def length(self,head):
        temp=head
        count=0
        while temp:
            count+=1
            temp=temp.next
        return count
        
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        loc=self.length(head)-n
        if head is None or head.next is None:
            return None
        i=1
        temp=None
        temp1=head
        while i<=loc:
            temp=temp1
            temp1=temp1.next
            i+=1
        if temp is not None:
            temp.next=temp1.next
        if temp is None:
            head=head.next 
        temp1.next=None
        return head
    

'''
this- problem can be solved by slow and fast pointer---O(n)
space--O(1)

logic is move fast pointer to n places
and move then move fast and slow pointers upto fast.next is not None so that
slow pointer will  before of deleting node
'''


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        slow=head
        fast=head
        i=1
        if slow is None or slow.next is None:
            return None

        while i<=n:
            fast=fast.next
            i+=1
        if fast is None:
            return head.next
        while fast.next!=None:
            fast=fast.next
            slow=slow.next
        slow.next=slow.next.next
        return head



        