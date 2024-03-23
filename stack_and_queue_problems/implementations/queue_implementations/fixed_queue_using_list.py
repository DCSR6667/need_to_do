class queue:
    def __init__(self,size):
        self.l=[]
        self.size=size
        
    def isfull(self):
        if len(self.l)==self.size:
            return True
        else:
            return False
        
    def isempty(self):
        if len(self.l)==0:
            return True
        else:
            return False
        
    def peek(self):
        if self.isempty():
            print("queue is empty")
        else:
            return self.l[0]
        
    def enqueue(self,ele):
        if self.isfull():
            print("queue is full we cant insert element")
        else:
            self.l.append(ele)
            
    def dequeue(self):
        if self.isempty():
            print("we cant delete an element because queue is empty")
        else:
            return self.l.pop(0)
        
    def display(self):
        if self.isempty():
            print("queue is empty")
        else:
            i=0
            while i<len(self.l):
                print(self.l[i],end="-->")
                i+=1
                
q=queue(5)
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.display()
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())

q.display()
    
        
    
        
    