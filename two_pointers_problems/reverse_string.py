'''
this problem can be solved by two pointers approach----O(n)

'''


def reverseString(s):
    """
    Do not return anything, modify s in-place instead.
    """
    i=0
    j=len(s)-1
    while i<j:
        s[i],s[j]=s[j],s[i]
        i+=1
        j-=1
    
        