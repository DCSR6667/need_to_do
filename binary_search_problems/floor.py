'''
this problem can be solved by binary search---O(logn)
floor of a number is greatest element that is smaller than or equal to target
'''

def floor(arr,target):
    low=0
    high=len(arr)-1
    while low<=high:
        mid=(low+high)//2
        if arr[mid]==target:
            return mid
        elif target>arr[mid]:
            low=mid+1
        else:
            high=mid-1
    return high

arr=[2,3,5,9,14,16,18]
print(floor(arr,13))
    