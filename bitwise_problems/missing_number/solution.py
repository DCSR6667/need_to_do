'''
this problem can be solved by bitwise operator--O(n)
'''
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        a=0
        for i in range(1,len(nums)+1):
            a=a^i
        for i in nums:
            a=a^i
        return a 
