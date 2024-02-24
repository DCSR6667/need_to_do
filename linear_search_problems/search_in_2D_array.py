def search_in_2d_array(arr,target):
    i=0
    while i<len(arr):
        j=0
        while j<len(arr[i]):
            if arr[i][j]==target:
                return [i,j]
            j+=1
        i+=1
    return -1

arr=[[1,2,3],[45,4,5],[6,7]]
print(search_in_2d_array(arr,-2))
    