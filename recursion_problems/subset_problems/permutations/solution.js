/**
 * time complexity----O(n!*n)
 * @param {number[]} nums
 * @return {number[][]}
 */

const swap=(nums,start,end)=>
    {
        var temp;
        temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
    
    };
    
    const helper=(nums,i,combined_res)=>
    {
        if(i>=nums.length)
        {
            combined_res.push([...nums]);
            return;
        }
        var index=i;
        while(index<nums.length)
        {
            swap(nums,i,index);
            helper(nums,i+1,combined_res);
            swap(nums,index,i);
            index+=1;
        }
    
    };
    
    
    var permute = function(nums) {
    
        var combined_res=[];
        helper(nums,0,combined_res);
        return combined_res;
        
    };