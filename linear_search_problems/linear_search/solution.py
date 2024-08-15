def linear_search(arr,target):
    if len(arr)==0:
        return float('inf')
    i=0
    while i<len(arr):
        if arr[i]==target:
            return i
        i+=1
    return float('inf')


arr=[1,2,3,4,5]
print(linear_search(arr,1))
    
