/**
 * this problem can be solved by bitwise operators -O(n+n)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    var i=1;
    var res=0;
    while(i<=nums.length)
    {
        res=res^i;
        i+=1;
    }

    var i=0;
    while(i<nums.length)
    {
        res=res^nums[i];
        i+=1;
    }
    return res;
};





/**
 * this problem can be solved by cyclic sort pattern--O(n+n)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var i=0;
    while(i<nums.length)
    {
        var corpos=nums[i];
        if(corpos<0 && corpos>=nums.length)
        {
            i+=1;
        }
        if(nums[i]!=nums[corpos])
        {
            var temp=nums[corpos];
            nums[corpos]=nums[i];
            nums[i]=temp;

        }
        else
        {
            i+=1;
        }
    }

    var i=0;
    while(i<nums.length)
    {
        if(i!=nums[i])
        {
            return i;
        }
        i+=1;
    }

    return nums.length;
    
};