/**
 * brute force approach----O(n2)
 *space complexity---O(1)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max_sum=-Infinity,i=0;
    while(i<nums.length)
    {
        var j=i;
        var sum=0;
        while(j<nums.length)
        {
            sum=sum+nums[j];
            if(sum>max_sum)
            {
                max_sum=sum;
            }
            j+=1;

        }
        i+=1;
    }
    return max_sum;
    
};




/**
 * this problem can be solved by sliding window--O(n)
 * space complexity--O(1)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max_sum=-Infinity,r=0,sum=0;
    while(r<nums.length)
    {
        sum=sum+nums[r];
        if(sum>max_sum)
        {
            max_sum=sum;
        }
        if(sum<0)
        {
            sum=0;
        }
        r+=1;

    }
    return max_sum;
    

};