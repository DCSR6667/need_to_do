# this problem can be solved by two pointers appraoch--O(n)
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i,j=0,1
        while j<len(nums):
            while j<len(nums) and  nums[i]==nums[j]:
                j+=1
            if j>=len(nums):
                break
            i+=1
            nums[i]=nums[j]
        return i+1
            
        