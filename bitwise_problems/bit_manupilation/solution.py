class Solution:
    def get_ith_bit(self,num,i):
        while i>0:
            bit=num&1;
            num=num>>1;
            i-=1
        return bit
        
    def set_ith_bit(self,num,i):
        mask=1<<(i-1)
        return (num | mask)
        
    def clear_ith_bit(self,num,i):
        mask=~(1<<(i-1))
        return (num & mask)
        
    def bitManipulation(self, num, i):
        # Code here
       ith_bit= self.get_ith_bit(num,i)
       set_number=self.set_ith_bit(num,i)
       clear_number=self.clear_ith_bit(num,i)
       print(ith_bit,set_number,clear_number,sep=" ")