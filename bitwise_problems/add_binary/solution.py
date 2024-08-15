'''
time complexity---O(max(len(a),len(b)))
'''

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        carry=0
        res=""
        a,b=a[::-1],b[::-1]
        for i in range(max(len(a),len(b))):
            x=a[i] if i<len(a) else 0
            y=b[i] if i<len(b) else 0
            s=int(x)+int(y)+carry
            res=res+str(s%2)
            carry=s//2
        if carry!=0:
            res=res+"1"
        return res[::-1]
