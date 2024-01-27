'''
this problem can be solved by taking two pointers one pointer on first 
list and second pointer on second list
time---O(n)
space--O(1)

'''


def mergeAlternately(word1,word2):
    i=0
    j=0
    res=""
    while i<len(word1) and j<len(word2):
        res=res+word1[i]+word2[j]
        i,j=i+1,j+1

    while i<len(word1):
        res=res+word1[i]
        i+=1
    while j<len(word2):
        res=res+word2[j]
        j+=1

    return res