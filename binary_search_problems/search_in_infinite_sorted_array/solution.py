'''
this problem can be solved by binary search pattern--O(logn)
but instead of dividing do multiplying
'''

def binary_search(arr,low,high,target):
    while low<=high:
        mid=(low+high)//2
        if target<arr[mid]:
            high=mid-1
        elif target>arr[mid]:
            low=mid+1
        else: 
            return mid
    return -1
def search_inf(nums,target):
    low=0
    high=1
    while True:
        if target>=nums[low] and target<=nums[high]:
            return binary_search(nums,low,high,target)
        else:
            temp=low
            low=high+1
            high=high+(high-temp+1)*2
nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]           
print(search_inf(nums,20))
            