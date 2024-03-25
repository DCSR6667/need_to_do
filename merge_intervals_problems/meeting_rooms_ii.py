'''
this problem can be solved by merge inteval pattern--O(nlogn+nlogn)
space---O(n)
'''

def meeting_room2(intervals):
    start=sorted(i[0] for i in intervals)
    end=sorted(j[1] for j in intervals)
    i,j=0,0
    count=0
    res=0
    while i<len(start) and j<len(end):
        if start[i]<end[j]:
            count+=1
            i+=1
        else:
            count-=1
            j+=1
            
        res=max(res,count)
        
    return res


intervals = [(0,30),(5,10),(15,20),(6,7),(7,9)]

print(meeting_room2(intervals))
            
    