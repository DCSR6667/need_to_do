'''
this problem can be solved by sliding window pattern ---O(n)
and the window size must be two distinct fruits

turning point 
---------------------
   if len(dict)>=3:
        min_ind=min(dict.values())
        del dict[fruits[min_ind]]
        l=min_ind+1

'''


def totalFruit(fruits):
    l,r=0,0
    max=float('-inf')
    
    dict={}
    while r<len(fruits):
        dict[fruits[r]]=r
        if len(dict)>=3:
            min_ind=min(dict.values())
            del dict[fruits[min_ind]]
            l=min_ind+1
        if (r-l+1)>max:
            max=r-l+1
        r+=1
    return max