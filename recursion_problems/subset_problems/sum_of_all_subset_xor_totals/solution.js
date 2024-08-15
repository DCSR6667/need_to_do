/**
 * @param {number[]} nums
 * @return {number}
 */

const xor=(arr)=>
    {
        var a=0;
        var i=0;
        while(i<arr.length)
        {
            a=a^arr[i];
            i+=1;
        }
        return a;
    
    
    };
    
    const helper=(res,i,nums)=>
    {
        var sum=xor(res);
        if(i>=nums.length)
        {
            return sum;
        }
        var index=i;
        var sum_from_below=0;
        while(index<nums.length)
        {
            res.push(nums[index]);
            sum_from_below=sum_from_below+helper(res,index+1,nums);
            res.pop();
            index+=1;
        }
        return sum+sum_from_below;
    
    };
    
    
    var subsetXORSum = function(nums) {
    
        return helper([],0,nums)
        
    };