'''
this problem can be solved by merge intervals pattern--O(nlogn+n)
space--O(1)
'''

class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        count=0
        intervals.sort()
        newInterval=intervals[0]
        i=1
        while i<len(intervals):
            if newInterval[1]<=intervals[i][0] or newInterval[0]>=intervals[i][1]:
                newInterval=intervals[i]
            else:
                count+=1
                if intervals[i][1]>newInterval[1]:
                    pass
                else:
                    newInterval=intervals[i]
            i+=1
        return count
        