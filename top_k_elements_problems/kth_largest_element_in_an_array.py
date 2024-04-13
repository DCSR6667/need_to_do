# the first approach is by using sort fun--O(nlogn)

'''
we can solve it by  heapify method ---O(n+klogn)
space--O(n)

'''
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)
        i=1
        n=len(nums)
        while i<=(n-k+1):
            ele=heapq.heappop(nums)
            i+=1
        return ele
    
    
 '''
 this problem can be solved by heap size restriction---O(nlogk)
 space--o(k)
 
 '''   
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        minheap=[]
        for ele in nums:
            if len(minheap)<k:
                heapq.heappush(minheap,ele)
            else:
                if ele>minheap[0]:
                    heapq.heappop(minheap)
                    heapq.heappush(minheap,ele)
        return minheap[0]
    
    
# third approach is by  quickselect(quicksort by some limitation)--O(n) as average case
    

