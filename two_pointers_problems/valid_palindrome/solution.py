'''
this problem can be solved by two pointer approach----O(n)
'''
def isalphanum(ch):
    if ord('A')<=ord(ch)<=ord('Z') or ord('a')<=ord(ch)<=ord('z') or ord('0')<=ord(ch)<=ord('9'):
        return True
    else:
        return False

def isPalindrome(self, s: str) -> bool:
        i=0
        j=len(s)-1
      
        while i<=j:
            while i<len(s) and not self.isalphanum(s[i]):
                i+=1
            while j>=0 and not self.isalphanum(s[j]):
                j-=1
            
            
            if i<=j and s[i].lower()!=s[j].lower():
                return False

          
            i+=1
            j-=1
           
        return True
            

            
       
