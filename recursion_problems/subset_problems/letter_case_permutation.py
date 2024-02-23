'''
this problem can be solved by recursion
'''

class Solution:
    def isalphabet(self,ch):
        if ord(ch)>=65 and ord(ch)<=90 or ord(ch)>=97 and ord(ch)<=122:
            return True
        else:
            return False

    def recur(self,res,s):
        if len(s)==0:
            return [res]

        val1=self.recur(res+s[0],s[1:])
        val2=[]
        if self.isalphabet(s[0]):
          
            if ord(s[0])>=97 and ord(s[0])<=122:
                c=chr(ord(s[0])-32)
            else:
                c=chr(ord(s[0])+32)
           
            val2=self.recur(res+c,s[1:])
        return val1+val2
    
    
    def letterCasePermutation(self, s: str) -> List[str]:
        return self.recur("",s)