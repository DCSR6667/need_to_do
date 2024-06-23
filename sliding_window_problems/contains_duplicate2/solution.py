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
    s=set()
    l,r=0,0
    while r<len(nums):
        if nums[r] not in s:
            s.add(nums[r])
            r+=1
        else:
            if (r-l)<=k:
                return True
            else:
                s.remove(nums[l])
                l+=1
    return False
       


        