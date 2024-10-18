'''
1..the first approach is brute force approach it will take ---O(n2)
'''
def maxSubArray1(nums):
    max=float('-inf')
    i=0
    while i<len(nums):
        sum=0
        j=i
        while j<len(nums):
            sum=sum+nums[j]
            if sum>max:
                max=sum
            j+=1
        i+=1
    
    return max



'''
2..the second approach is by using sliding window pattern--O(n)
turning point
----------------
if sum<0:
    sum=0
because if we add negative part to the right part then we can't get maximum sum 
that's why we are making sum=0

'''

def maxSubArray2(nums):
    max=float('-inf')
    l,r=0,0
    sum=0
    while r<len(nums):
        sum=sum+nums[r]
        if sum>max:
            max=sum
        if sum<0:
            sum=0
        r+=1
    return max
nums = [5,4,-1,7,8]
print(maxSubArray2(nums))
