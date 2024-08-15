'''
time complexity--O(logn)
'''

class Solution:
    def count_no_of_bits(self,n):
        count=0
        while n>0:
            count+=1
            n=n>>1
        return count
    def bitwiseComplement(self, n: int) -> int:
        if n==0:
            return 1
        x=1<<self.count_no_of_bits(n)
        return n^(x-1)
    
'''
 time complexity----O(logn)
 '''   
class Solution:
    def findComplement(self, num: int) -> int:
        res=0
        i=0
        while num>0:
            if num&1==0:
                res=res | (1<<i)
            i=i+1
            num=num>>1
        return res
        