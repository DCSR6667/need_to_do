# time complexity---O(logn)
class Solution:
    def get_position(self,n):
        count=0
        while(n>0):
            bit=n&1
            count=count+1
            if bit==0:
                return count
            n=n>>1
        
        return count+1
            
    def setBit(self, n):
        # code here
        pos=self.get_position(n)
        mask=1<<(pos-1)
        return (n | mask)
		