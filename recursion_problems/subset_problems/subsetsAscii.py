def subsetsAscii(res,inp):
    if len(inp)==0:
        return [res]
    val1=subsetsAscii(res+inp[0],inp[1:])
    val2=subsetsAscii(res+str(ord(inp[0])),inp[1:])
    val3=subsetsAscii(res,inp[1:])
    return val1+val2+val3

print(subsetsAscii("","ab"))