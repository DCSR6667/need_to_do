'''
time complexity--O(n)
space complexity--O(1)
# Node Class
	class Node:
	    def __init__(self, data):   # data -> value stored in node
	        self.data = data
	        self.next = None
	        self.prev = None
'''
class Solution:
    def constructDLL(self, arr):
        # Code here
        dummy=Node(0)
        tail=dummy
        i=0
        while i<len(arr):
            new_node=Node(arr[i])
            tail.next=new_node
            new_node.prev=tail
            tail=tail.next
            i+=1
        dummy.next.prev=None
        return dummy.next
            
            