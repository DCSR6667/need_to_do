'''
this problem can be solved by brute force approach---O(n2)
'''
def longestOnes(nums,k):
    i=0
    maxi=float('-inf')
    
    while i<len(nums):
        j=i
        count=0
        while j<len(nums):
            if nums[j]==0:
                count+=1
            if count<=k:
                maxi=max((j-i+1),maxi)
            else:
                break
            j+=1
        i+=1

    if maxi==float('-inf'):
        return 0
    else:
        return maxi
    

'''
this problem can be solved by using sliding window problem--O(n)
turning point
---------------------
while count>k:
    if nums[l]==0:
        count-=1
    l+=1

'''
def longestOnes(self, nums: List[int], k: int) -> int:
    l,r=0,0
    count=0
    maxi=float('-inf')
    while r<len(nums):
        if nums[r]==0:
            count+=1
       
        while count>k:
            if nums[l]==0:
                count-=1
            l+=1

        if count<=k:
            maxi=max((r-l+1),maxi)
        r+=1
    if maxi==float('-inf'):
        return 0
    else:
        return maxi
