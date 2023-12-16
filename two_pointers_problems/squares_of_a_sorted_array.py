'''
this problem can be solved by two pointers approach
because it is a sorted array---O(n)

'''

def sortedSquares(nums):
    i,j,k=0,len(nums)-1,1
    res=[0]*len(nums)
    while i<=j:
        if abs(nums[i])>abs(nums[j]):
            res[-k]=nums[i]**2
            k+=1
            i+=1
        elif abs(nums[i])<abs(nums[j]):
            res[-k]=nums[j]**2
            k+=1
            j-=1
        else:
            res[-k]=nums[i]**2
            i+=1
            k+=1
    return res
