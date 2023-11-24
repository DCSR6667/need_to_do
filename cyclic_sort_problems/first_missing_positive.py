'''
this problem can be solved by cyclic sort pattern ----O(n)

'''


def firstMissingPositive(nums):
    i=0
    while i<len(nums):
        corpos=nums[i]-1
        if corpos<0 or corpos>=len(nums):
            i+=1
            continue
        if nums[i]!=nums[corpos]:
            nums[i],nums[corpos]=nums[corpos],nums[i]
        else:
            i+=1
    
    i=0
    while i<len(nums):
        if (i+1)!=nums[i]:
            return i+1
        i+=1
    return len(nums)+1

