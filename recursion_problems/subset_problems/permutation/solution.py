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

def permutation2(res,inp):
    if len(inp)==0:
        print(res)
        return
    size=len(inp)
    i=0
    while i<size:
        permutation2(res+inp[i],inp.replace(inp[i],""))
        i+=1
    



    
permutation2("","ab")