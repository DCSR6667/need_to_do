'''
this problem can be solved by cyclic sort pattern--O(n)

'''


def findDisappearedNumbers(nums):
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
    l=[]
    while i<len(nums):
        if nums[i]!=(i+1):
            l.append(i+1)
        i+=1
    return l