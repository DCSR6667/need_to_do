'''
this question can be solved by fast and slow pointers approch--O(n)
space--O(1)

'''
'''
Structure of node

# Node Class
class Node:
    def __init__(self, data):   # data -> value stored in node
        self.data = data
        self.next = None

'''

#Function to find the length of a loop in the linked list.
def countNodesinLoop(head):
    #Your code here
    slow,fast=head,head
    while fast and fast.next:
        slow=slow.next
        fast=fast.next.next
        if slow is fast:
            count=0
            while True:
                slow=slow.next
                count+=1
                if slow is fast:
                    return count
    return 0
