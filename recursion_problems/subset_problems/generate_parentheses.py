'''
this problem can be solved by recursion
'''
class Solution:
    def recur(self,res,l,r):
        if l==0 and r==0:
            return [res]
        val1,val2=[],[]
        if l!=0:
            val1=self.recur(res+"(",l-1,r)
        if l!=r:
            val2=self.recur(res+")",l,r-1)
        return val1+val2
    def generateParenthesis(self, n: int) -> List[str]:
        return self.recur("",n,n)
        