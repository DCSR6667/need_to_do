'''
It uses memory more efficiently because 
it can reuse the space that becomes available when elements are dequeued

'''
class cqueue:
    def __init__(self,size):
        self.front=-1
        self.rear=-1
        self.size=size
        self.l=[None]*size
        
    def isfull(self):
        if self.front==0 and self.rear==self.size-1:
            return True
        elif self.front-self.rear==1:
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
            print("we cant add an element queue is full")
        else:
            if self.front==-1:
                self.front+=1
                self.rear+=1
                self.l[self.front]=ele
            elif self.rear==self.size-1 and self.front!=0:
                self.rear=0
                self.l[self.rear]=ele
            else:
                self.rear+=1
                self.l[self.rear]=ele
            
    def dequeue(self):
        if self.front==self.rear:
            removed=self.l[self.front]
            self.front=-1
            self.rear=-1
            return removed
        elif self.front==self.size-1 and self.front>self.rear:
            removed=self.l[self.front]
            self.front=0
            return removed
        else:
            removed=self.l[self.front]
            self.front+=1
            return removed
        
    def display(self):
        if self.isempty():
            print("cqueue is empty")
        else:
            i=self.front
            while i<self.size:
                print(self.l[i],end="-->")
                i+=1
            i=i-1
            if i!=self.rear:
                i=0
                while i<=self.rear:
                    print(self.l[i],end="-->")
                    i+=1
                
    def peek(self):
        if self.isempty():
            print("cqueue is empty")
        else:
            return self.l[self.front]
        
        
cq=cqueue(5)
cq.enqueue(1)
cq.enqueue(2)
cq.enqueue(3)
cq.enqueue(4)
cq.enqueue(5)
cq.dequeue()
cq.dequeue()
cq.enqueue(6)
cq.enqueue(7)
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.enqueue(8)
cq.enqueue(9)
cq.enqueue(10)
cq.enqueue(11)
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.display()

            
            
            
    