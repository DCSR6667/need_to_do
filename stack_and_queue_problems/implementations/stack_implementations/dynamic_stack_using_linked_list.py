class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
        


class stack:
    def __init__(self):
        self.head=None
        
    def isempty(self):
        if self.head is None:
            return True
        else:
            return False
        
        
    def push(self,data):
        node=Node(data)
        node.next=self.head
        self.head=node
        
    def pop(self):
        if self.isempty():
            print("we cant delete an element because stack is empty ")
        else:
            d=self.head
            self.head=self.head.next
            return d.data
            
        
    def peek(self):
        if self.isempty():
            print("stack is empty")
        else:
            return self.head.data
    
    def display(self):
        if self.head is None:
            print("stack is empty")
        else:
            temp=self.head
            while temp is not None:
                print(temp.data,end="-->")
                temp=temp.next
                
                
    def deletestack(self):
        self.head=None
        
s=stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.display()
s.deletestack()
s.display()


            
            
        
  