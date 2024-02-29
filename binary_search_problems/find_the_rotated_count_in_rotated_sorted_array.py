'''
this problem can be solved by binary search pattern--O(logn)
find the pivot element position and that position is equal to no of rotation
'''

class Solution:
    def findKRotation(self,arr,  n):
        # code here
        low=0
        high=len(arr)-1
        while low<=high:
            mid=(low+high)//2
            if mid<high and arr[mid]>arr[mid+1]:
                return mid+1
            if mid>low and arr[mid]<arr[mid-1]:
                return mid
            if arr[low]>arr[mid]:
                high=mid-1
            else:
                low=mid+1
        return 0
        