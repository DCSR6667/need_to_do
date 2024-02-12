def subsets(res,inp):
    if len(inp)==0:
        print(res)
        return
    subsets(res+inp[0],inp[1:])
    subsets(res,inp[1:])
    
    
def subsets1(res,inp):
    if len(inp)==0:
        return [res]
    res1=subsets1(res+inp[0],inp[1:])
    res2=subsets1(res,inp[1:])
    return res1+res2
    
    
print(subsets1("","abc"))