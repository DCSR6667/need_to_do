'''
this problem can be solved by cyclic sort pattern---O(n)


'''
def missingNumber(nums):
    i=1
    while i<len(nums):
        corpos=nums[i]
        if corpos<0 or corpos>=len(nums):
            i+=1
            continue
        if nums[i]==nums[corpos]:
            i+=1
        else:
            nums[i],nums[corpos]=nums[corpos],nums[i]
    i=0
    while i<len(nums):
        if nums[i]!=i:
            return i
        else:
            i+=1
    return len(nums)


nums=[0,1]
print(missingNumber(nums))
            