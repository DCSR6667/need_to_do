'''
time complexity--O(n*pow(2,n))
space complexity--O(n*pow(2,n))
'''

def subsets(input):
    res=[[]]
    i=0
    while i<len(input):
        j=0
        size=len(res)
        while j<size:
            val=res[j].copy()
            val.append(input[i])
            res.append(val)
            j+=1
        i+=1
    return res

print(subsets([1,2,3]))