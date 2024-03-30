'''
this problem can be solved by using heap--O(n+n+n+klogn)
space--O(n)
'''

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        d={} 
        maxheap=[]
        for i in nums:
            d[i]=d.get(i,0)+1
        for key,f in d.items():
            maxheap.append([f*-1,key])
        heapq.heapify(maxheap)
        res=[]
        while k>0:
            f,key=heapq.heappop(maxheap)
            res.append(key)
            k-=1
        return res


      
'''
this problem can be solved by heap--O(n+nlogk+klogk)
space--O(k)
'''

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        d={} 
        minheap=[]
        for i in nums:
            d[i]=d.get(i,0)+1
        for key,f in d.items():
            if len(minheap)<k:
                heapq.heappush(minheap,[f,key])
            else:
                if f>minheap[0][0]:
                    heapq.heappop(minheap)
                    heapq.heappush(minheap,[f,key])
        

          
        res=[]
        
        while len(minheap)>0:
            f,key=heapq.heappop(minheap)
            res.append(key)
        return res


        