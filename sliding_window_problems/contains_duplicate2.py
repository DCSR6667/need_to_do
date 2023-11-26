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
 if r-d[nums[r]]>k:
    d[nums[r]]=r
'''

def containsNearbyDuplicate(nums,k):
    l,r=0,0
    d={}
    while r<len(nums):
        if nums[r] not in d.keys():
            d[nums[r]]=r
        elif r-d[nums[r]]>k:
            d[nums[r]]=r
        else:
            return True
        r+=1
    return False
        
        