'''
this problem can be solved by brute force approach--0(n2)

'''



def longestKSubstr(s,k):
    i=0
    max=float('-inf')
    while i<len(s):
        j=i
        st=set()
        while j<len(s):
            if s[j] not in st:
                st.add(s[j])
            if len(st)==k:
                if (j-i+1)>max:
                    max=j-i+1
            elif len(st)>k:
                break
            j+=1
        i+=1
    if max==float('-inf'):
        return -1
    else:
        return max
    return max


'''
this problem can be solved by sliding window pattern--O(n)

turning point----
--------------------
 elif len(d)>k:
    min_ind=min(d.values())
    del d[s[min_ind]]
    l=min_ind+1
'''

def longestKSubstr(s,k):
    l,r=0,0
    d={}
    max=float('-inf')
    while r<len(s):
        d[s[r]]=r
        if len(d)==k:
            if (r-l+1)>max:
                max=(r-l+1)
        elif len(d)>k:
            min_ind=min(d.values())
            del d[s[min_ind]]
            l=min_ind+1
        r+=1
    if max==float('-inf'):
        return -1
    else:
        return max
            