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