class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
        
class queue:
    def __init__(self):
        self.front=None
        self.rear=None
        
    def isempty(self):
        if self.front is None:
            return True
        else:
            return False
        
    def enqueue(self,data):
        node=Node(data)
        if self.front is None and self.rear is None:
            self.front=node
            self.rear=node
        else:
            self.rear.next=node
            self.rear=self.rear.next
            
    def dequeue(self):
        if self.isempty():
            print("we cant delete element because queuee is empty")
        else:
            if self.front is self.rear:
                removed=self.front.data
                self.front=None
                self.rear=None
                return removed
            else:
                removed=self.front.data
                self.front=self.front.next
                return removed
            
    def peek(self):
        if self.isempty():
            print("queue is empty")
        else:
            return self.front.data
        
    def display(self):
        if self.isempty():
            print("queue is empty")
        temp=self.front
        while temp is not None:
            print(temp.data,end="-->")
            temp=temp.next
        
q=queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)
print(q.dequeue())
print(q.peek())
q.display()
        