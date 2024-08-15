'''
1.take a bit and shift to right most position
2.and shift that bit to left suitable position
3.and add it to the result


'''

class Solution:
    def reverseBits(self, n: int) -> int:
        i=0
        res=0
        while i<32:
            last=(n>>i)&1
            rightshift=last<<(31-i)
            res=res | rightshift
            i+=1
        return res