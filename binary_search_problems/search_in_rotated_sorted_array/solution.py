'''
this problem can be solved by binary search pattern--O(logn)
first find the pivot element and then perform binary search
'''

class Solution:
    def pivot(self,nums):
        low=0
        high=len(nums)-1
        while low<=high:
            mid=(low+high)//2
            if mid<high and nums[mid]>nums[mid+1]:
                return mid
            elif mid>low and nums[mid-1]>nums[mid]:
                return mid-1
            elif nums[low]>nums[mid]:
                high=mid-1
            else:
                low=mid+1
        return -1

    def binary_search(self,nums,target,low,high):
        while low<=high:
            mid=(low+high)//2
            if target<nums[mid]:
                high=mid-1
            elif target>nums[mid]:
                low=mid+1
            else:
                return mid
        return -1
        
        return -1
    def search(self, nums: List[int], target: int) -> int:
        pivot=self.pivot(nums)
      
        if pivot==-1:
            return self.binary_search(nums,target,0,len(nums)-1)
        if nums[pivot]==target:
            return pivot

        if target>=nums[0]:
            return self.binary_search(nums,target,0,pivot-1)
        else:
            return self.binary_search(nums,target,pivot+1,len(nums)-1)
       
        