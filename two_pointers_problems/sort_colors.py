
def sortColors(nums):
    """
    Do not return anything, modify nums in-place instead.
    """
    i=0
    c0,c1,c2=0,0,0
    while i<len(nums):
        if nums[i]==0:
            c0+=1
        elif nums[i]==1:
            c1+=1
        else:
            c2+=1
        i+=1

    i=0
    while i<len(nums):
        if c0!=0:
            nums[i]=0
            c0-=1
        elif c1!=0:
            nums[i]=1
            c1-=1
        elif c2!=0:
            nums[i]=2
            c2-=1
        i+=1

'''

this problem can be solved by two pointers approach by dutch national flag--O(n)

low-1 region --contains zeroes
high+1 region--contains twos

'''


def sortColors(nums):
    """
    Do not return anything, modify nums in-place instead.
    """
    l,mid,r=0,0,len(nums)-1
    while mid<=r:
        if nums[mid]==0:
            nums[l],nums[mid]=nums[mid],nums[l]
            l+=1
            mid+=1
        elif nums[mid]==2:
            nums[mid],nums[r]=nums[r],nums[mid]
            r-=1
        else:
            mid+=1
    
    
            