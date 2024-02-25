def binary_search(arr,target):
    low=0
    high=len(arr)-1
    while low<=high:
        mid=(low+high)//2
        if target<arr[mid]:
            high=mid-1
        elif target>arr[mid]:
            low=mid+1
        else: 
            return mid
    return -1

def binary_search_recur(arr,low,high,target):
    if low>high:
        return -1
    mid=(low+high)//2
    if target==arr[mid]:
        return mid
    elif target<arr[mid]:
        return binary_search_recur(arr,low,mid-1,target)
    else:
        return binary_search_recur(arr,mid+1,high,target)
    

arr=[1,2,3,4,5]
print(binary_search_recur(arr,0,len(arr)-1,20))
