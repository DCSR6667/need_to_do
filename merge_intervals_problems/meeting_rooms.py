'''
this problem can be solved  by merge intervals----O(nlogn+n)

'''

def meeting_rooms(intervals):
    intervals.sort()
    i=0
    while i<len(intervals)-1:
        first=intervals[i][1]
        second=intervals[i+1][0]
        if first>=second:
            return False
        else:
            return True
        
intervals = [(0,30),(5,10),(15,20)]
intervals = [(5,8),(9,15)]
print(meeting_rooms(intervals))
            