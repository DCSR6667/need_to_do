'''
this problem can be solved by bitwise operator ---O(n)
'''
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        res=0
        for i in nums:
            res=res^i
        return res
    
'''
this problem can be solved by using hashmap--O(n+n)
space--O(n)
'''
    
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
       d={}
       for i in nums:
           if i not in d.keys():
               d[i]=1
           else:
                d[i]=d[i]+1
       for i in nums:
            if d[i]==1:
                return i
        