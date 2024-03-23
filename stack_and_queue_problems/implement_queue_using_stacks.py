class MyQueue:

    def __init__(self):
        self.first=[]
        self.second=[]
        
    # time--O(1)
    def push(self, x: int) -> None:
        self.first.append(x)
        
    # time--O(n)
    def pop(self) -> int:
        if len(self.second)!=0:
            return self.second.pop()
        else:
            while len(self.first)!=0:
                self.second.append(self.first.pop())
            return self.second.pop()

        
    # time--O(n)
    def peek(self) -> int:
        if len(self.second)!=0:
            return self.second[-1]
        else:
            while len(self.first)!=0:
                self.second.append(self.first.pop())
            return self.second[-1]
        
    #time--O(n)
    def empty(self) -> bool:
        if len(self.first)==0 and len(self.second)==0:
            return True
        else:
            return False
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()


#method 2
class MyQueue:

    def __init__(self):
        self.first=[]
        self.second=[]
        
    #time--O(n)
    def push(self, x: int) -> None:
        while len(self.first)!=0:
            self.second.append(self.first.pop())
        self.first.append(x)
        while len(self.second)!=0:
            self.first.append(self.second.pop())
        

        
    #time--O(1)
    def pop(self) -> int:
        return self.first.pop()
        
    #time--O(1)
    def peek(self) -> int:
        return self.first[-1]
        
    #time--O(n)
    def empty(self) -> bool:
        if len(self.first)==0 and len(self.second)==0:
            return True
        else:
            return False
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()