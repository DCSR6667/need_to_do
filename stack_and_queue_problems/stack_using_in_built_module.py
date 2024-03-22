# maxsize – Number of items allowed in the queue.
# empty() – Return True if the queue is empty, False otherwise.
# full() – Return True if there are maxsize items in the queue. If the queue was initialized with maxsize=0 (the default), then full() never returns True.
# get() – Remove and return an item from the queue. If the queue is empty, wait until an item is available.
# get_nowait() – Return an item if one is immediately available, else raise QueueEmpty.
# put(item) – Put an item into the queue. If the queue is full, wait until a free slot is available before adding the item.
# put_nowait(item) – Put an item into the queue without blocking. If no free slot is immediately available, raise QueueFull.
# qsize() – Return the number of items in the queue.

# method 1 fixed stack

from queue import LifoQueue

# Initializing a stack
stack = LifoQueue(maxsize=3)

# qsize() show the number of elements
# in the stack
print(stack.qsize())

# put() function to push
# element in the stack
stack.put('a')
stack.put('b')
stack.put('c')

print("Full: ", stack.full())
print("Size: ", stack.qsize())

# get() function to pop
# element from stack in
# LIFO order
print('\nElements popped from the stack')
print(stack.get())
print(stack.get())
print(stack.get())

print("\nEmpty: ", stack.empty())



# method 2 fixed stack
class stack:
    def __init__(self,size):
        self.l=[]
        self.size=size
        
    def display(self):
        if len(self.l)==0:
            print("stack is empty")
        else:
            n=len(self.l)-1
            while n>=0:
                print(self.l[n])
                n-=1
            
        
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
            
        
    def push(self,ele):
        if self.isfull():
            print("stack is full we can't insert element")
            return
        self.l.append(ele)
        return ele
    
    def pop(self):
        if self.isempty():
            print("stack is empty we can't delete an element")
            return
        return self.l.pop()
    
    def peek(self):
        if self.empty():
            print("stack is empty")
            return
        return self.l[-1]
    
    
st=stack(5)
st.push(1)
st.push(2)
st.push(3)
st.push(4)

st.push(5)
st.push(6)
st.push(7)

st.display()
    
    
    
    
# method 3  dynamic stack
class stack:
    def __init__(self,size):
        self.l=[]
       
    def display(self):
        if len(self.l)==0:
            print("stack is empty")
        else:
            n=len(self.l)-1
            while n>=0:
                print(self.l[n])
                n-=1
            
        
    def isempty(self):
        if len(self.l)==0:
            return True
        else:
            return False
            
        
    def push(self,ele):
        self.l.append(ele)
        return ele
    
    def pop(self):
        if self.isempty():
            print("stack is empty we can't delete an element")
            return
        return self.l.pop()
    
    def peek(self):
        if self.isempty():
            print("stack is empty")
            return
        return self.l[-1]
    
    
st=stack(5)
st.push(1)
st.push(2)
st.push(3)
st.push(4)

st.push(5)
st.push(6)
st.push(7)

print(st.peek())
    
    
    
    
        
    
    
    
        