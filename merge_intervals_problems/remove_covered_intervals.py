'''
this problem can be solved by merge intervals pattern--O(n)
space--O(n)

'''
class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda i: (i[0],-i[1]))
        res=[intervals[0]]
        i=1
        while i<len(intervals):
            first=res[-1]
            if first[0]<=intervals[i][0] and first[1]>=intervals[i][1]:
                i+=1
            else:
                res.append(intervals[i])
                i+=1
        return len(res)