'''
this problem can be solved by two pointers approach----O(n)
'''

def ispalindrome(s):
    l,r=0,len(s)-1
    while l<r:
        if s[l]!=s[r]:
            return False
        l+=1
        r-=1
    return True

def validPalindrome(s):
    l,r=0,len(s)-1
    while l<r:
        if s[l]==s[r]:
            l+=1
            r-=1
        elif s[l]!=s[r]:
            skipL,skipR=s[l+1:r+1],s[l:r]
            if ispalindrome(skipL) or ispalindrome(skipR):
                return True
            else:
                return False
    return True
        