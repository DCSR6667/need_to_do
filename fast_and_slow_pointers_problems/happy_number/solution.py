'''
this problem can be solved by using hash set---O(n)
space--O(n)
'''

class Solution:
    def square(self,n):
        sum=0
        while n>0:
            rem=n%10
            n=n//10
            sum=sum+(rem*rem)
        return sum
    def isHappy(self, n: int) -> bool:
        s=set()
        sq=n
        while sq!=1:
            sq=self.square(sq)
            if sq not in s:
                s.add(sq)
            else:
                return False
        return True
    

'''
this problem can be solved by fast and slow pointers--O(n)
space--O(1)
'''

class Solution:
    def sq(self,n):
        sum=0
        while n>0:
            rem=n%10
            n=n//10
            sum=sum+(rem*rem)
        return sum
    def isHappy(self, n: int) -> bool:
        slow,fast=n,n
        while True:
            slow=self.sq(slow)
            fast=self.sq(self.sq(fast))
            if fast==1:
                return True
            if slow==fast:
                return False
        
