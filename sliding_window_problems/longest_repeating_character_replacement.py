'''
this problem can be solved by brute force approach ---O(n2)

it depends on no of replacements

'''
def characterReplacement(s,k):
    i=0
    maxi=float('-inf')
    while i<len(s):
        j=i
        dict={}
        while j<len(s):
            dict[s[j]]=1+dict.get(s[j],0)
            noofrep=(j-i+1)-max(dict.values())
            
            if noofrep>k:
                break
            else:
                if (j-i+1)>maxi:
                    maxi=(j-i+1)
            j+=1
        i+=1
    return maxi



'''
this below approch is sliding window approach----O(n)

it depends on no of replacements

turning point
-----------------------
while (r-l+1)-(max(d.values()))>k:
    d[s[l]]-=1
    l=l+1
'''


def characterReplacement(s,k):
    l,r=0,0
    maxi=float('-inf')
    d={}
    while r<len(s):
        d[s[r]]=1+d.get(s[r],0)
        while (r-l+1)-(max(d.values()))>k:
            d[s[l]]-=1
            l=l+1
        if (r-l+1)>maxi:
            maxi=(r-l+1)
        r+=1
    return maxi
