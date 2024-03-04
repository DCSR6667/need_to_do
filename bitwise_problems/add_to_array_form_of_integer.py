'''
time complexity---O(max(len(num),k))
space--O(n)
'''

class Solution:
    def reverse(self,num):
        l=0
        h=len(num)-1
        while l<h:
            num[l],num[h]=num[h],num[l]
            l+=1
            h-=1
        
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        self.reverse(num)
        i=0
        l=[]
        carry=0
        while k>0:
            x=num[i] if i<len(num) else 0
            y=k%10
            s=x+y+carry
            l.append(s%10)
            carry=s//10
            i=i+1
            k=k//10
        while i<len(num):
            x=num[i] if i<len(num) else 0
            s=x+carry
            l.append(s%10)
            carry=s//10
            i=i+1
        if carry!=0:
            l.append(carry)
        self.reverse(l)
        return l
       
''''
time complexity---O(kdigits)
space--O(1)

'''
class Solution:
    def reverse(self,num):
        l=0
        h=len(num)-1
        while l<h:
            num[l],num[h]=num[h],num[l]
            l+=1
            h-=1
        
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        self.reverse(num)
        i=0
        while k>0:
            digit=k%10
            if i<len(num):
               
                num[i]=num[i]+digit
            else:
                num.append(digit)
            carry=num[i]//10
            num[i]=num[i]%10
            k=k//10
            k=k+carry
            i+=1
        self.reverse(num)
        return num