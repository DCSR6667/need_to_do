/**
 * binary search---O(logn)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var low=0;
    var high=nums.length-1;
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        if(target==nums[mid])
        {
            return mid;
        }
        else if(target>nums[mid])
        {
            low=mid+1;

        }
        else
        {
            high=mid-1;

        }
    }
    return low;
    
};