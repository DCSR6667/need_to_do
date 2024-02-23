'''
this problem can be solved by recursion
'''

def ga(res,s):
    if len(s)==0:
        return [res]
    
    final1=ga(res+s[0],s[1:])
    
    if res=="":
        res=res+"1"
    else:
        ch=res[-1]
        if ord(ch)>=65 and ord(ch)<=90 or ord(ch)>=97 and ord(ch)<=122:
            res=res+"1"
        else:
            val=int(ch)+1
            size=len(res)-1
            res=res[0:size]+str(val)

    final2=ga(res,s[1:])
    
    return final1+final2

print(ga("","word"))