'''
this problem can be solved by brute force approach--O(n2)

'''


def maxProfit(prices):
    i=0
    profit=float('-inf')
    while i<len(prices):
        j=i+1
        while j<len(prices):
            if (prices[j]-prices[i])>profit:
                profit=prices[j]-prices[i]
            j+=1
        i+=1
    if profit<0:
        return 0
    else:
        return profit
    

'''
this problem can be solved by sliding window pattern--O(n)

'''

def maxProfit(prices):
    l,r=0,0
    profit=float('-inf')
    while r<len(prices):
        if prices[l]>prices[r]:
            l=r
            r=r+1
        else:
            if prices[r]-prices[l]>profit:
                profit=prices[r]-prices[l]
            r+=1
    return profit
        