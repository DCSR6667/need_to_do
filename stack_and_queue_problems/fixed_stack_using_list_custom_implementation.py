class stack:
    def __init__(self,size):
        self.ptr=-1
        self.l=[None]*size
        self.size=size
        
    def isfull(self):
        if self.ptr==self.size-1:
            return True
        else:
            return False
        
    def isempty(self):
        if self.ptr==-1:
            return True
        else:
            return False
        
    def push(self,ele):
        if self.isfull():
            print("stack is full we cant insert element")
        else:
            self.ptr=self.ptr+1
            self.l[self.ptr]=ele
    
    def pop(self):
        if self.isempty():
            print("stack is empty we cant delete ele")
        else:
            ele=self.l[self.ptr]
            self.ptr=self.ptr-1
            return ele
            
    def peek(self):
        if self.isempty():
            print("stack is empty ")
        else:
            return self.l[self.ptr]
        
        
    def display(self):
        if self.isempty():
            print("stack is empty")
        else:
            tmp=self.ptr
            while tmp>=0:
                print(self.l[tmp],end="-->")
                tmp-=1
                
                
                
s=stack(5)
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
s.push(6)
s.display()
print(s.pop())
print(s.pop())
print(s.pop())
print(s.pop())
print(s.pop())
print(s.pop())
s.display()

    
                
        
        
    
        
        