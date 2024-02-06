'''
this problem can be solved by taking two pointers on l1 and l2 ---O(max(l1,l2))
space--O(n)--for new linked list
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry=0
        sum=0
        val1,val2=0,0
        dummy=ListNode(0)
        tail=dummy
        while l1 or l2:
            if l1:
                val1=l1.val
            else:
                val1=0
            if l2:
                val2=l2.val
            else:
                val2=0

            sum=val1+val2+carry
            res=sum%10
            carry=sum//10
            tail.next=ListNode(res)
            tail=tail.next
            if l1:
                l1=l1.next
            if l2:
                l2=l2.next
        if carry!=0:
            tail.next=ListNode(carry)
            tail=tail.next
        return dummy.next
