'''
this problem can be solved by brute force approach --O(n2)

'''

def numOfSubarrays(arr,k,threshold):
    i=0
    res=0
    while i<len(arr):
        j,sum,count=i,0,0
        while j<len(arr):
            sum=sum+arr[j]
            count=count+1
            if count==k:
                avg=sum/k
                if avg>=threshold:
                    res+=1
                break
            j+=1
        i+=1
    return res



'''
this problem can be solved by sliding window pattern --O(n)
turning point
-------------------
 if count==k:
    avg=sum/k
    if avg>=threshold:
        res+=1
    sum=sum-arr[l]
    count-=1
    l+=1
'''

def numOfSubarrays(arr,k,threshold):
    l,r,sum,count,res=0,0,0,0,0
    while r<len(arr):
        sum=sum+arr[r]
        count+=1
        if count==k:
            avg=sum/k
            if avg>=threshold:
                res+=1
            sum=sum-arr[l]
            count-=1
            l+=1
        r+=1
    return res