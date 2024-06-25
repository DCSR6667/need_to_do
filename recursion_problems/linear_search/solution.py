def search(a,i,target):
    if i==len(a):
        return False
    if target==a[i]:
        return True
    return search(a,i+1,target)

def searchAll(a,i,target):
    l=[]
    if i==len(a):
        return l
    if target==a[i]:
        l.append(i)
    resfrombelow=searchAll(a,i+1,target)
    return l+resfrombelow


a=[1,2,5,4,5,6,5]
print(searchAll(a,0,5))