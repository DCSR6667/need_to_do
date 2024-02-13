def binary_search(a,target,s,e):
    if s>e:
        return False
    mid=(s+e)//2
    if a[mid]==target:
        return True
    elif a[mid]>target:
        return binary_search(a,target,s,mid-1)
    else:
        return binary_search(a,target,mid+1,e)
    
a=[1,2,3,4,5]
print(binary_search(a,0,0,len(a)-1)) 