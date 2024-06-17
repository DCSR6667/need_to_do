/**
 * this problem can be solved by cyclic sort pattern---O(n)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var i=0;
    var temp;
    while(i<nums.length)
    {
        var corpos=nums[i];
        if(corpos<0 || corpos>=nums.length)
        {
            i+=1;
            continue;
        }

        if(nums[i]!=nums[corpos])
        {
            temp=nums[i];
            nums[i]=nums[corpos];
            nums[corpos]=temp;
        }
        else
        {
            i+=1;

        }
    }

    i=0;
    while(i<nums.length)
    {
        if((nums[i]-i)!=0)
        {
            return i;
        }
        i+=1;
    }
    return nums.length;
    
};