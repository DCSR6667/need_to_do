'''
the problem can be solved by heap---O(n+nlogn)
'''

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones=[-x for x in stones]
        heapq.heapify(stones)
        while len(stones)>1:
            
            x=heapq.heappop(stones)*-1
            y=heapq.heappop(stones)*-1
            if x!=y:
                heapq.heappush(stones,-1*(abs(x-y)))
        if len(stones)==1:
            return -1*stones[0]
        else:
            return 0
