'''
this problem can be solved by brute force approach---O(n3)
'''


def threeSum(nums):
    l=[]
    l1=[]
    i=0
    nums.sort()
    while i<len(nums):
        j=i+1
        while j<len(nums):
            k=j+1
            while k<len(nums):
                if nums[i]+nums[j]+nums[k]==0:
                    s=str(nums[i])+" "+str(nums[j])+" "+str(nums[k])
                    if s not in l1:
                        l1.append(s)
                        l.append([nums[i],nums[j],nums[k]])
                k+=1
            j+=1
        i+=1
    return l