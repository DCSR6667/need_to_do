'''
this problem can be solved by brute force approach ---O(n2)

'''

def twoSum(nums,target):
    i=0
    while i<len(nums):
        j=i+1
        while j<len(nums):
            if nums[i]+nums[j]==target:
                return [i,j]
            j+=1
        i+=1
        
'''
this problem can be solved by hashmap approach ---O(n)
space---O(n)
 if a+b=sum then b=sum-a
'''

def twoSum(nums,target):
    d={}
    i=0
    while i<len(nums):
        if target-nums[i] in d.keys():
            return [i,d[target-nums[i]]]
        else:
            d[nums[i]]=i
        i+=1


'''
the below approach is two pointers approach inorder to use it the array 
should be sorted----O(n)

'''


def twoSum(nums,target):
    nums.sort()
    l,h=0,len(nums)-1
    while l<h:
        if nums[l]+nums[h]==target:
            return [l,h]
        elif nums[l]+nums[h]>target:
            h-=1
        else:
            l+=1
        

        
        