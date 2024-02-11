def is_sorted(a,i):
    if i==len(a)-1:
        return True
    if a[i]>a[i+1]:
        return False
    return is_sorted(a,i+1)
a=[1,2,8,4,5]
print(is_sorted(a,0))