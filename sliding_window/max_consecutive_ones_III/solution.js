/**
 * this problem can be solved by brute force approach---O(n2)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    var i=0;
    var j,count0,count,max_res;
    max_res=Math.log(0);
    while(i<nums.length)
    {
        j=i;
        count0=0;
        count=0;
        while(j<nums.length)
        {
           
            if(nums[j]==0)
            {
                count0+=1;
            }
             if(count0>k)
            {
                break;
            }
            count+=1;
            max_res=Math.max(max_res,count);
            
            
            j+=1;

        }
        i+=1;
    }
    if(max_res==Math.log(0))
    {
        return 0;
    }
    else
    {
        return max_res;
    }
    
};




/**
 * this problem can be solved by using sliding window problem--O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    var l=0;
    var r=0;
    var max_res=Math.log(0);
    var count0=0;
    var count;
    while(r<nums.length)
    {
        if(nums[r]==0)
        {
            count0+=1;
        }
        while(count0>k)
        {
            if(nums[l]==0)
            {
                count0-=1;
            }
            l+=1;
        }
        count=(r-l+1);
        max_res=Math.max(count,max_res);
        r+=1;

    }
    if(max_res==Math.log(0))
    {
        return 0;
    }
    else
    {
        return max_res;
    }
    
};