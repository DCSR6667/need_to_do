/**
 * binary search--O(logn)
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var low=0;
    var high=nums.length-1;
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        console.log(low,mid,high);
        if(nums[mid+1]==undefined)
        {
        
            return nums[0];
        }
        if(nums[mid]>nums[mid+1])
        {
            return nums[mid+1];
        }
        else
        {
            if(nums[mid]>=nums[low])
            {
                low=mid+1;
            }
            else
            {
                high=mid-1;
            }
        }
    }
    
};