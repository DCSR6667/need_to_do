'''
this problem can be solved by brute force approach---O(n3)
'''

def threeSumClosest(nums,target):
    i=0
    closest_sum=0
    closest_dis=float('inf')
    while i<len(nums):
        j=i+1
        while j<len(nums):
            k=j+1
            while k<len(nums):
                if nums[i]+nums[j]+nums[k]==target:
                    return nums[i]+nums[j]+nums[k]
                elif abs(target-(nums[i]+nums[j]+nums[k]))<closest_dis:
                    closest_dis=abs(target-(nums[i]+nums[j]+nums[k]))
                    closest_sum=nums[i]+nums[j]+nums[k]
                k+=1
            j+=1
        i+=1
    return closest_sum
                    



'''
this problem can be solved by two pointers approach ---O(n2)
space--O(1)
'''


def threeSumClosest(nums,target):
    nums.sort()
    closest_dis=float('inf')

    closest_sum=0
    i=0
    while i<len(nums):
        l=i+1
        h=len(nums)-1
        while l<h:
            if nums[i]+nums[l]+nums[h]==target:
                return nums[i]+nums[l]+nums[h]
            elif abs(target-(nums[i]+nums[l]+nums[h]))<closest_dis:
                closest_dis=abs(target-(nums[i]+nums[l]+nums[h]))
                closest_sum=nums[i]+nums[l]+nums[h]
            if nums[i]+nums[l]+nums[h]>target:
                h-=1
            else:
                l+=1   
        i+=1
    return closest_sum
        