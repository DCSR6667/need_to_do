'''
this problem can be solved by brute force approach--O(n2)
'''

def containsNearbyDuplicate(nums,k):
    i=0
    while i<len(nums):
        j=i+1
        while j<len(nums):
            if nums[i]==nums[j] and (j-i)<=k:
                return True
            j+=1
        i+=1
    return False


'''
this problem can be solved by sliding window problem---O(n)

turning point
--------------------
 if r-l>k:
    window.remove(nums[l])
    l+=1
 
'''


def containsNearbyDuplicate(nums,k):
    window=set()
    l,r=0,0
    while r<len(nums):
        if r-l>k:
            window.remove(nums[l])
            l+=1
        if nums[r] not in window:
            window.add(nums[r])
        else:
            return True
        r+=1
    return False


        