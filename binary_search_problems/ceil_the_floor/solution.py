# time complexity---O(nlogn+logn)
def getFloorAndCeil(arr, n, target):
    # code here
    arr.sort();
    ceil=-1
    floor=-1
    low=0
    high=n-1
    while low<=high:
        mid=(low+high)//2
        if target==arr[mid]:
            return [arr[mid],arr[mid]]
        elif target<arr[mid]:
            ceil=arr[mid]
            high=mid-1
        else:
            floor=arr[mid]
            low=mid+1
    return [floor,ceil]