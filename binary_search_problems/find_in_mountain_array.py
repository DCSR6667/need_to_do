# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
#class MountainArray:
#    def get(self, index: int) -> int:
#    def length(self) -> int:

class Solution:
    
    def binary_search(self,mountain_arr,low,high,target,asc):
        ans=-1
        while low<=high:
            mid=(low+high)//2
            if target==mountain_arr.get(mid):
                ans=mid
                high=mid-1
            elif target>mountain_arr.get(mid):
                if asc:
                    low=mid+1
                else:
                    high=mid-1
            else:
                if asc:
                    high=mid-1
                else:
                    low=mid+1
        return ans
                
    def peak_element(self,mountain_arr):
        low,high=0,mountain_arr.length()-1
        while low<high:
            mid=(low+high)//2
            if mountain_arr.get(mid)<=mountain_arr.get(mid+1):
                low=mid+1
            else:
                high=mid
        return low
    
    
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        peak=self.peak_element(mountain_arr)
        val=self.binary_search(mountain_arr,0,peak,target,True)
        if val==-1:
            return self.binary_search(mountain_arr,peak+1,mountain_arr.length()-1,target,False)
        return val

