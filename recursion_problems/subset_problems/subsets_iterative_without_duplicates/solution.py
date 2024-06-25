'''
time complexity--O(n*pow(2,n))
space complexity--O(n*pow(2,n))
'''

def subsets_without_duplicates(nums):
    nums.sort()
    res=[[]]
    i=0
    while i<len(nums):
        start=0
        if i>0 and nums[i]==nums[i-1]:
            start=end+1
     
            
        end=len(res)
            
        j=start
        while j<end:
            val=res[j].copy()
            val.append(nums[i])
            res.append(val)
            j+=1
        i+=1
    return res


print(subsets_without_duplicates([1,2,2]))
            