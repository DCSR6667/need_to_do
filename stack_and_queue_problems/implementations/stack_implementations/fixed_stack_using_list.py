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