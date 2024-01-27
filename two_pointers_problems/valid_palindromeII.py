'''
this problem can be solved by two pointers approach----O(n)
'''


def palin(s,i,j):
    while i<j:
        if s[i]!=s[j]:
            return False
        elif s[i]==s[j]:
            i+=1
            j-=1
    return True
def validPalindrome(s):
    i=0
    j=len(s)-1
    while i<j:
        if s[i]==s[j]:
            i+=1
            j-=1
        elif s[i]!=s[j]:
            if palin(s,i+1,j) or palin(s,i,j-1):
                return True
            else:
                return False
    return True
        