class Solution:
    def number_of_digits(self,num):
        c=0
        while num>0:
            c+=1
            num=num//10
        return c
    def findNumbers(self, nums: List[int]) -> int:
        count=0
        i=0
        while i<len(nums):
            digits=self.number_of_digits(nums[i])
            if digits%2==0:
                count+=1
            i+=1
        return count