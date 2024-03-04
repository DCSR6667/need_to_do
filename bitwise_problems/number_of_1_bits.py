'''
this problem can be oslved by bitwise operators--O(log(digits))
'''
class Solution:
    def hammingWeight(self, n: int) -> int:
        count=0
        while n>0:
            last=n&1
            if last==1:
                count+=1
            n=n>>1
        return count
        
'''
 time complexity----O(number of 1 bits)
 '''       
class Solution:
    def hammingWeight(self, n: int) -> int:
        count=0
        while n>0:
            n=n&(n-1)
            count+=1
        return count