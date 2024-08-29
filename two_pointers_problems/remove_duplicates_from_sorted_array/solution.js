/**
 * this problem can be solved by two pointers approach--O(n)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i=0;
    var j=1;
    while(j<nums.length)
    {
        while(nums[i]==nums[j])
        {
            j+=1;
        }
        if(j>=nums.length)
        {
            break;
        }
        i+=1;
        nums[i]=nums[j];
    }
    return i+1;
        
    
    
};