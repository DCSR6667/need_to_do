'''
this problem can be solved by heap---O(n+n+klogn)
space--O(n)
'''
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        minheap=[]
        for i in points:
            d=i[0]**2+i[1]**2
            minheap.append([d,i[0],i[1]])
        heapq.heapify(minheap)
        
        i=1
        res=[]
        while i<=k:
            d,x,y=heapq.heappop(minheap)
            res.append([x,y])
            i+=1
        return res

'''
 this problem can be solved by using heap--O(nlogk+klogk)
 space--O(k)
'''   
    
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        maxheap=[]
        for i in points:
            d=(i[0]**2+i[1]**2)
            if len(maxheap)<k:
                heapq.heappush(maxheap,[d*-1,i[0],i[1]])
            else:
                if d<(maxheap[0][0])*-1:
                    heapq.heappop(maxheap)
                    heapq.heappush(maxheap,[d*-1,i[0],i[1]])
        res=[]
        while len(maxheap)>0:
            d,x,y=heapq.heappop(maxheap)
            res.append([x,y])

        return res
            
        