/**
 * this problem can be solved by brute force approach --O(n2)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var i=0;
    var j,sum,avg;
    var max_average=Math.log(0);
    while(i<=(nums.length-k))
    {
        j=i;
        sum=0;
        while(j<(i+k))
        {
            sum=sum+nums[j];
            j+=1;
        }
        avg=sum/k;
        max_average=Math.max(max_average,avg);
        i+=1;
    }
    return max_average;
    
};







/**
 * the below approach is sliding window approach ---O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var l=0;
    var r=0;
    var max_average=Math.log(0);
    var sum=0;
    var avg;
    while(r<nums.length)
    {
        sum=sum+nums[r];
        if((r-l+1)==k)
        {
            avg=sum/k;
            max_average=Math.max(max_average,avg);
            sum=sum-nums[l];
            l+=1;
        }
        r+=1;
        
    }
    return max_average;
    
};