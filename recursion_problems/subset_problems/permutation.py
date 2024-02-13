def permutation(res,inp):
    if len(inp)==0:
        print(res)
        return
    size=len(res)+1
    i=0
    while i<size:
        first=res[0:i]
        mid=inp[0]
        last=res[i:]
        permutation(first+mid+last,inp[1:])
        i+=1




def permutation1(res,inp):
    if len(inp)==0:
        return [res]
    size=len(res)+1
    i=0
    net=[]
    while i<size:
        first=res[0:i]
        mid=inp[0]
        last=res[i:]
        net=net+permutation1(first+mid+last,inp[1:])
        i+=1
    return net


def permutation_count(res,inp):
    if len(inp)==0:
        return 1
    size=len(res)+1
    i=0
    count=0
    while i<size:
        first=res[0:i]
        mid=inp[0]
        last=res[i:]
        count=count+permutation_count(first+mid+last,inp[1:])
        i+=1
    return count
    
print(permutation_count("","abcd"))