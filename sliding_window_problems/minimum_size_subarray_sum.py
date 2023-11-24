'''
the below approach is brute force approach  it will take ----O(n2)
'''
def minSubArrayLen1(target,nums):
    min=float('inf')
    i=0
    while i<len(nums):
        j=i
        sum=0
        while j<len(nums):
            sum=sum+nums[j]
            if sum>=target:
                if (j-i+1)<min:
                    min=(j-i+1)
                break
            j+=1
        i+=1
    if min==float('inf'):
        return 0 
    else:
        return min
    

'''
this problem can be solved by sliding window pattern----O(n)
turning point
--------------
 while sum>=target:
        if (r-l+1)<min:
            min=(r-l+1)
        sum=sum-nums[l]
        l=l+1
'''

def minSubArrayLen2(target,nums):
    min=float('inf')
    l,r=0,0
    sum=0
    while r<len(nums):
        sum=sum+nums[r]
        while sum>=target:
            if (r-l+1)<min:
                min=(r-l+1)
            sum=sum-nums[l]
            l=l+1
        r+=1
    if min==float('inf'):
        return 0
    else:
        return min
                
    