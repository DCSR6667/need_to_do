/**
 * brute force approach--O(n2)
 * space complexity--O(1)
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    var i=0,count=0,avg;
    while(i<arr.length)
    {
        var j=i;
        var sum=0;
        while(j<arr.length)
        {
            sum=sum+arr[j];
            if((j-i+1)==k)
            {
                avg=sum/k;
                if(avg>=threshold)
                {
                    count+=1;
                }
                break;
            }
            j+=1;
        }
        i+=1;
    }
    return count;
    
};





/**
 * this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(1)
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    var l=0,r=0,count=0,sum=0,avg;
    while(r<arr.length)
    {
        sum=sum+arr[r];
        if((r-l+1)==k)
        {
            avg=sum/k;
            if(avg>=threshold)
            {
                count+=1;
            }
            sum=sum-arr[l];
            l+=1;


        }
        r+=1;

    }
    return count;
    
};