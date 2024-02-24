def min_and_max(arr):
    min=arr[0]
    max=arr[0]
    i=0
    while i<len(arr):
        if arr[i]<min:
            min=arr[i]
        if arr[i]>max:
            max=arr[i]
        i+=1
        
    return [min,max]
arr=[1,2,3,4,5,-5,100]
print(min_and_max(arr))

