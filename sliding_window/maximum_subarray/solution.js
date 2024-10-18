/**
 * 1..the first approach is brute force approach it will take ---O(n2)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var i=0;
    var maxsum=nums[0];
    
    while(i<nums.length)
    {
        var j=i;
        var sum=0;
        while(j<nums.length)
        {
            sum=sum+nums[j];
            if(sum>maxsum)
            {
                maxsum=sum;
            }
            j+=1;
            
        }
        i+=1;
    }
    return maxsum;
}







/**
 * 2..the second approach is by using sliding window pattern--O(n)
turning point
----------------
if sum<0:
    sum=0
because if we add negative part to the right part then we can't get maximum sum 
that's why we are making sum=0
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var l=0;
    var r=0;
    var maxsum=nums[0];
    var window_sum=0;
    while(r<nums.length)
    {
        window_sum=window_sum+nums[r];
        
        if(window_sum>maxsum)
        {
            maxsum=window_sum;
        }
        if(window_sum<0)
        {
            window_sum=0;
           
        }
        r=r+1;
       
    }
    return maxsum;
    
};