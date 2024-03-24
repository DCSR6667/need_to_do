'''
this problem can be solved by merge intervals pattern--O(nlogn+n)
space--O(n)

'''

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        newInterval=intervals[0]
        
        res=[]
        i=0
        while i<len(intervals):
            if intervals[i][1]<newInterval[0]:
                res.append(intervals[i])
            elif intervals[i][0]>newInterval[1]:
                res.append(newInterval)
                newInterval=intervals[i]
            else:
                newInterval=[min(intervals[i][0],newInterval[0]),max(intervals[i][1],newInterval[1])]
            i+=1
        res.append(newInterval)
        return res