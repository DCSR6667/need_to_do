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