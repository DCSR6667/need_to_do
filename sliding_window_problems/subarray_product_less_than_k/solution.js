/**
 * this problem can be solved by brute force approach ----O(n2)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    var count=0;
    var i=0;
    while(i<nums.length)
    {
        var j=i;
        var prod=1;
        while(j<nums.length)
        {
            prod=prod*nums[j];
            if(prod<k)
            {
                count+=1;
            }
            else
            {
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

turning point
--------------------
 while prod>=k:
    prod=prod/nums[l]
    l+=1
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    var l=0;
    var r=0;
    var prod=1;
    var count=0;
    if(k<=1)
    {
        return 0;
    }
    while(r<nums.length)
    {
        prod=prod*nums[r];
        while(prod>=k)
        {
            prod=prod/nums[l];
            l+=1;
        }
        count=count+(r-l+1);
        r+=1;
    }
    return count;
    
};