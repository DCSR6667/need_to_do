#time complexity---O
def cyclic_sort(nums):
    i=0
    while i<len(nums):
        corpos=nums[i]-1
        if corpos<0 or corpos>=len(nums):
            i+=1
            continue
        if nums[i]==nums[corpos]:
            i+=1
        else:
            nums[i],nums[corpos]=nums[corpos],nums[i]
    


nums=[3,4,-1,1]
cyclic_sort(nums)
print(nums)