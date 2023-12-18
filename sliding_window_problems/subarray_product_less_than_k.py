'''
this problem can be solved by brute force approach ----O(n2)

'''

def numSubarrayProductLessThanK(nums,k):
    i=0
    count=0
    
    while i<len(nums):
        j=i
        prod=1
        while j<len(nums):
            prod=prod*nums[j]
            if prod<k:
                count+=1
            j+=1
        i+=1
    return count


'''
this problem can be solved by sliding window pattern--O(n)

turning point
--------------------
 while prod>=k:
    prod=prod/nums[l]
    l+=1

'''

def numSubarrayProductLessThanK(nums,k):
    count=0
    prod=1
    l,r=0,0
    if k<=1:
        return 0
    while r<len(nums):
        prod=prod*nums[r]
        while prod>=k:
            prod=prod/nums[l]
            l+=1
        count=count+(r-l+1)
        r+=1
    return count

