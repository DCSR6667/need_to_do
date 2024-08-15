# split_array_largest_sum====allocate_books===painters_partition_problem

# time complexity----O(log(sum-max_ele+1)*size_of_array)
class Solution:
    def splitArray(self, arr: List[int], m: int) -> int:
        low=max(arr)
        high=sum(arr)
        ans=-1
        while low<=high:
            j=0
            s=0
            no_of_students=0
            mid=(low+high)//2
            while j<len(arr):
                s=s+arr[j]
                if s<=mid:
                    j+=1
                else:
                    no_of_students+=1
                    s=0
            if (no_of_students+1)>m:
                low=mid+1
            elif (no_of_students+1)<=m:
                ans=mid
                high=mid-1
           
            
        return ans

# time complexity----O((sum-max_ele+1)*size_of_array)
class Solution:
    def splitArray(self, arr: List[int], m: int) -> int:
        if len(arr)<m:
            return -1
        i=max(arr)
        high=sum(arr)
        while i<=high:
            j=0
            s=0
            no_of_students=0
            while j<len(arr):
                s=s+arr[j]
                if s<=i:
                    j+=1
                else:
                    no_of_students+=1
                    s=0
            if (no_of_students+1)==m:
                return i
            i+=1
        return max(arr)
        