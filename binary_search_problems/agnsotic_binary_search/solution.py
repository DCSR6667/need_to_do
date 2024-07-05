def agnostic_binary_search(arr,target):
    low=0
    high=len(arr)-1
    
    if arr[low]<arr[high]:
        asc=True
    else:
        asc=False
        
    while low<=high:
        mid=(low+high)//2
        if arr[mid]==target:
            return mid
        elif target<arr[mid]:
            if asc:
                high=mid-1
            else:
                low=mid+1  
        else:
            if asc:
                low=mid+1
            else:
                high=mid-1
    return -1


arr=[5,4,3,2,1]

print(agnostic_binary_search(arr,1))
            