'''
this problem can be solved by bitwise operators---O(nlog(digits))
'''

class Solution:
    def count_of_1s(self,num):
        count=0
        while num>0:
            num=num&(num-1)
            count+=1
        return count
    def countBits(self, n: int) -> List[int]:
        i=0
        l=[]
        while i<=n:
            l.append(self.count_of_1s(i))
            i=i+1
        return l
