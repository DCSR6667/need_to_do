/**
 * the below approach is brute force approach  it will take ----O(n2)
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    var i=0;
    var min_length=Infinity;
    var sum;
    while(i<nums.length)
    {
        sum=0;
        var j=i;
        while(j<nums.length)
        {
            sum=sum+nums[j];
            if(sum>=target)
            {
                min_length=Math.min(min_length,(j-i+1));
                break;
            }
            j+=1;
        }
        i+=1;
    }
    if(min_length==Infinity)
    {
        return 0;
    }
    else
    {
        return min_length;
    }
    
};


/**
 * this problem can be solved by sliding window pattern----O(n)
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    var l=0;
    var r=0;
    var sum=0;
    var min_length=Infinity;
    while(r<nums.length)
    {
        sum=sum+nums[r];
        while(sum>=target)
        {
            min_length=Math.min(min_length,(r-l+1));
            sum=sum-nums[l];
            l+=1;
        }
        r+=1;

    }
    if(min_length==Infinity)
    {
        return 0;
    }
    else{
        return min_length;
    }
};