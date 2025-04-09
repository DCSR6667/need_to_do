/**
 * brute force approach---O(n2)
 * space complexity--O(1)
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
            if(nums[i]==nums[j] && (j-i)<=k)
            {
                return true;
            }
            j+=1;
        }
        i+=1;
    }
    return false;
    
};