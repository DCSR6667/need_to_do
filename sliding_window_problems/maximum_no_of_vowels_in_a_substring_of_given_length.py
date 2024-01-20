'''
this problem can be solved by brute force approach---O(n2)
'''


def maxVowels(s,k):
    i=0
    max_len=float("-inf")
    while i<len(s):
        j=i
        count=0
        while j<len(s):
            if (j-i+1)<=k:
                if s[j]=='a' or s[j]=='e' or s[j]=='i' or s[j]=='o' or s[j]=='u':
                    count+=1
                    if count>max_len:
                        max_len=count
            else:
                break
            j+=1
        i+=1
    if max_len==float("-inf"):
        return 0
    else:
        return max_len
    


'''
this below problem can be solved by sliding window problem---O(n)

'''



def maxVowels(s,k):
    l,r=0,0
    countV=0
    max_len=float('-inf')
    while r<len(s):
        if s[r]=='a' or s[r]=='e' or s[r]=='i' or s[r]=='o' or s[r]=='u':
            countV+=1
        if (r-l+1)>k:
            if s[l]=='a' or s[l]=='e' or s[l]=='i' or s[l]=='o' or s[l]=='u':
                countV-=1
            l+=1
        if (r-l+1)==k:
            if countV>max_len:
                max_len=countV
        r+=1
    return max_len
