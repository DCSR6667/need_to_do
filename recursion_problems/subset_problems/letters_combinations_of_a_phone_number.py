'''
this problem can be solved by recursion
'''

class Solution:
    def conversion(self,c):
          d={"2":"abc","3":"def","4":"ghi","5":"jkl","6":"mno","7":"pqrs","8":"tuv","9":"wxyz"}
          return d[c]

    def letters(self,res,digits):
        
        if len(digits)==0:
            return [res]
        ch=digits[0]
        s=self.conversion(ch)
        i=0
        final=[]
        while i<len(s):
            final=final+self.letters(res+s[i],digits[1:])
            i+=1
        return final


    def letterCombinations(self, digits: str) -> List[str]:
        r=self.letters("",digits)
        if len(r)==1:
            return []
        else:
            return r
        