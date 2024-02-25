'''
this problem can be solved by binary search----O(n)
'''
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        low=0
        high=len(nums)-1
        l=[]
        while low<=high:
            mid=(low+high)//2
            if target==nums[mid]:
                p1,p2=mid,mid
                while p1>0 and nums[p1]==nums[p1-1]:
                    p1=p1-1
                l.append(p1)
                while p2<len(nums)-1 and nums[p2]==nums[p2+1]:
                    p2+=1
                l.append(p2)
                return l
                
                
            elif target>nums[mid]:
                low=mid+1
            else:
                high=mid-1
        return [-1,-1]
   
'''
this problem can solved by binary search  and it is better when compared with 
above one--O(logn+logn)

just perform binary search two times

'''
    
class Solution:
    def search(self,nums,startindex,target):
        low=0
        high=len(nums)-1
        ans=-1
        while low<=high:
            mid=(low+high)//2
            if target<nums[mid]:
                high=mid-1
            elif target>nums[mid]:
                low=mid+1
            else:
                ans=mid
                if startindex:
                    high=mid-1
                else:
                    low=mid+1
        return ans
                

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        start=self.search(nums,True,target)
        end=self.search(nums,False,target)
        return [start,end]
        