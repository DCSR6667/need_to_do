'''
this problem can be solved by binary search pattern---O(logn)+precision time

'''
def square_root(num,p):
    low=0
    high=num
    root=0
    while low<=high:
        mid=(low+high)//2
        if (mid*mid)==num:
            return mid
        elif num<mid*mid:
            high=mid-1
        else:
            low=mid+1
            root=mid
    inc=0.1
    i=1
    while i<=p:
        while num>(root*root):
            root=root+inc
        root=root-inc
        inc=inc/10
        i+=1
    return root


print(square_root(40,3))
        