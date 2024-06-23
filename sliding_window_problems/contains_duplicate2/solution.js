/**
 * this problem can be solved by brute force approach--O(n2)
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var i=0;
    while(i<nums.length)
    {
        var j=i+1;
        while(j<nums.length)
        {
            if(nums[i]==nums[j] && Math.abs(i-j)<=k)
            {
                return true;
            }
            j+=1;
        }
        i+=1;
    }
    
    return false;
};





/**
 * this problem can be solved by sliding window problem---O(n)

turning point
--------------------
 if r-l>k:
    window.remove(nums[l])
    l+=1
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var s=new Set();
    var l=0;
    var r=0;
    while(r<nums.length)
    {
        if(!s.has(nums[r]))
        {
            s.add(nums[r]);
            r+=1;
        }
        else if((r-l)<=k)
        {
            return true;

        }
        else
        {
            
            s.delete(nums[l]);
            l=l+1;

        }
    }
    return false;


    
};