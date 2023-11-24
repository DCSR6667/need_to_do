'''
the below approach is brute force approach where we took set to get result ----O(n2)
space---O(n2)

'''


def lengthOfLongestSubstring(s):
    i=0
    max=float('-inf')
    while i<len(s):
        st=set()
        j=i
        while j<len(s):
            if s[j] not in st:
                st.add(s[j])
                if len(st)>max:
                    max=len(st)

            else:
                break
            j+=1
        i+=1
    if max==float('-inf'):
        return 0
    else:
        return max
    



'''
this problem can be solved by  sliding window problem----O(n)
space-----O(n)

turning point
---------------------

if s[r] in st:
    st.remove(s[l])
    l+=1

    remove first element of set so that from the next element onwards there may
    be a chance of getting longest substring without repeating characters

'''



def lengthOfLongestSubstring(s):
    max=float('-inf')
    l,r=0,0
    st=set()
    while r<len(s):
        if s[r] not in st:
            st.add(s[r])
            if len(st)>max:
                max=len(st)
            r+=1
        else:
            st.remove(s[l])
            l+=1
    if max==float('-inf'):
        return 0
    else:
        return max
    