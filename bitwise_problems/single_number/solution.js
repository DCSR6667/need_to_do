/**
 * this problem can be done by bit wise operation--(O(n))
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var i=0;
    var res;
    while(i<nums.length)
    {
        res=res^nums[i];
        i+=1;

    }
    return res;
    
};