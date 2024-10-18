/**
 * this problem can be solved by brute force approach --O(n2)
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    var i=0;
    var count=0;
    while(i<=(arr.length-k))
    {
        var j=i;
        sum=0;
        while(j<k+i)
        {
            sum=sum+arr[j];
            j+=1;

        }
        var avg=sum/k;
        if(avg>=threshold)
        {
            count+=1;
        }
        i+=1;
    }

    return count;
    
};





/**
 * this problem can be solved by sliding window pattern --O(n)
turning point
-------------------
 if count==k:
    avg=sum/k
    if avg>=threshold:
        res+=1
    sum=sum-arr[l]
    count-=1
    l+=1
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    var l=0;
    var r=0;
    var sum=0;
    var count=0;
    var avg;
    while(r<arr.length)
    {
        sum=sum+arr[r];
        if((r-l+1)>k)
        {
            sum=sum-arr[l];
            l+=1;
        }
        if((r-l+1)==k)
        {
            avg=sum/k;
            if(avg>=threshold)
            {
                count+=1;
            }
        }
        r+=1;

    }

    return count;

    
};