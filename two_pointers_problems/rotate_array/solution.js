/**
 * brute force approach--O(klogn)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    var i=1;
    var size=nums.length;
    while(i<=k)
    {
        var last=nums[size-1];
        var j=size-2;
        while(j>=0)
        {
            nums[j+1]=nums[j];
            j-=1;
        }
        nums[0]=last;
        i+=1;

    }
};