class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        i=0
        max=float('-inf')
        while i<len(accounts):
            s=sum(accounts[i])
            if s>max:
                max=s
            i+=1
        return max
        