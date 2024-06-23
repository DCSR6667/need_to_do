'''
this problem can be solved by brute force approach --O(n2)
'''


def findMaxAverage(nums,k):
    i=0
    max=float('-inf')
    while i<len(nums):
        j=i
        count=0
        sum=0
        while j<len(nums):
            sum=sum+nums[j]
            count+=1
            if count==k:
                avg=sum/k
                if avg>max:
                    max=avg
                break
            j+=1
        i+=1
    return max
        


'''
the below approach is sliding window approach ---O(n)
turning point 
----------------
 if (r-l+1)>k:
    sum=sum-nums[l]
    l=l+1
'''


def findMaxAverage(nums,k):
    l,r=0,0
    sum=0
    maxi=float('-inf')
    while r<len(nums):
        sum=sum+nums[r]
        if (r-l+1)>k:
            sum=sum-nums[l]
            l=l+1
        if (r-l+1)==k:
            if sum/k>maxi:
                maxi=sum/k
        r+=1
    return maxi