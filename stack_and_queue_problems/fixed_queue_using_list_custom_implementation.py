class queue:
    def __init__(self,size):
        self.l=[None]*size
        self.front=-1
        self.rear=-1
        self.size=size
        
    def isfull(self):
        if self.rear==self.size-1:
            return True
        else:
            return False
        
    def isempty(self):
        if self.front==-1:
            return True
        else:
            return False
        
    def enqueue(self,ele):
        if self.isfull():
            print("queue is full we cant insert element")
        elif self.front==-1:
            self.front=self.front+1
            self.rear=self.rear+1
            self.l[self.front]=ele
        else:
            self.rear=self.rear+1
            self.l[self.rear]=ele
    
    def dequeue(self):
        if self.isempty():
            print("we cant delete element queue is empty")
        elif self.front==self.rear:
            removed=self.l[self.front]
            self.front=-1
            self.rear=-1
            return removed
        else:
            removed=self.l[self.front]
            self.front+=1
            return removed
        
        
    def peek(self):
        if self.isempty():
            print("queue is empty")
        else:
            return self.l[self.front]
        
        
    def display(self):
        if self.isempty():
            print("queue is empty")
        else:
            i=self.front
            while i<=self.rear:
                print(self.l[i],end="-->")
                i+=1

q=queue(5)
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
print(q.dequeue())
print(q.peek())
q.display()
            
            
            