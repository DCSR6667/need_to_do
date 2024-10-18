'''
this problem can be solved by brute force approach---O(n2)

'''


def totalFruit(s):
    i=0
    max=float('-inf')
    while i<len(s):
        j=i
        s=set()
        while j<len(s):
            if s[j] not in s:
                s.add(s[j])
            if len(s)<=2:
                if (j-i+1)>max:
                    max=j-i+1
            elif len(s)>2:
                break
            j+=1
        i+=1
    return max


'''
this problem can be solved by sliding window pattern ---O(n)
and the window size must be two distinct fruits

turning point 
---------------------
   if len(dict)>=3:
        min_ind=min(dict.values())
        del dict[s[min_ind]]
        l=min_ind+1

'''


def totalFruit(s):
    l,r=0,0
    max=float('-inf')
    
    dict={}
    while r<len(s):
        dict[s[r]]=r
        if len(dict)>=3:
            min_ind=min(dict.values())
            del dict[s[min_ind]]
            l=min_ind+1
        if (r-l+1)>max:
            max=r-l+1
        r+=1
    return max