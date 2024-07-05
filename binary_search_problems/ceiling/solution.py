'''
this problem can be solved by binary search---O(logn)
ceil of a number is smallest element that is greater than or equal to target
'''
def ceiling(arr,target):
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
    return low

arr=[2,3,5,9,14,16,18]
print(ceiling(arr,6))
    