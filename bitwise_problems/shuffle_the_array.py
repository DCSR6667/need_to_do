'''
time complexity--O(n/2)
space complexity--O(n)
'''

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        i=0
        j=n
        l=[]
        while i<n:
            l.append(nums[i])
            l.append(nums[j])
            j+=1
            i+=1
        return l
    
    
'''
this problem can be solved by bit manipulation---O(n)
space--O(1)

integer datatype has 4 bytes of memory which has 32 bits
here in this problem the max value 1000 which can be stored in 10 bits

1.so the logic is store x value and y value in x memory only

2.after storing split the x and y  values and store it from the end of the array


'''  
    
class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        i=0
        while i<n:
            nums[i]=nums[i]<<10
            nums[i]=nums[i] | nums[i+n]
            i+=1
            
            
        i=n-1
        j=2*n-1
        while i>=0:
            y=nums[i]&((2**10)-1)
            x=nums[i]>>10
            nums[j]=y
            nums[j-1]=x
            j=j-2
            i=i-1
        return nums
        
    