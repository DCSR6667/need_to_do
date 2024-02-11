class Solution:
    def numberOfSteps(self, num: int) -> int:
        count=0
        while num>0:
            if num%2==0:
                num=num//2
                count+=1
            else:
                num=num-1
                count+=1
        return count
        

class Solution:
    def numberOfSteps(self, num: int) -> int:
        if num==0:
            return 0
        if num%2==0:
            num=num//2
            c=1
            val=self.numberOfSteps(num)
            return c+val
        else:
            num=num-1
            c=1
            val=self.numberOfSteps(num)
            return c+val