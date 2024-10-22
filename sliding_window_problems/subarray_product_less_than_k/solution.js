/**
 * brute force approach ---O(n2)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    var i=0,count=0;
    while(i<nums.length)
    {
        var j=i;
        var prod=1;
        while(j<nums.length)
        {
            prod=prod*nums[j];
            if(prod>=k)
            {
                break;
            }
            if(prod<k)
            {
                count+=1;
            }
            j+=1;
        }
        i+=1;
    }
    return count;
    
};




/**
 * this problem can be solved by sliding window problem --O(n)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    var l=0,r=0,count=0;
    var prod=1;
    if(k<=1)
    {
        return 0;
    }
    while(r<nums.length)
    {
        prod=prod*nums[r];
        while(prod>=k)
        {
            prod=Math.floor(prod/nums[l]);
            l+=1;
        }
       
            count=count+(r-l+1);
        r+=1;
    }
    return count;
    
};