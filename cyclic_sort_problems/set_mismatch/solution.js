/**
 * this problem can be solved by using cyclic sort pattern---O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var i=0;
    while(i<nums.length)
    {
        var corpos=nums[i]-1;
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
        else{
            i+=1;
        }
    }

    i=0;
    var res=[];
    while(i<nums.length)
    {
        if((nums[i]-i)!=1)
        {
            res.push(nums[i]);
            res.push(i+1);
        }
        i+=1;
    }

    return res;
    
};