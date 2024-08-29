/**
 * this problem can be solved by taking i and j pointers--O(n)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var swap=(nums,i,j)=>
    {
        var temp;
        temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
    
    };
    
    
    var moveZeroes = function(nums) {
    
        var i=0;
        var j=i+1;
        while(j<nums.length)
        {
            if(nums[i]==0 && nums[j]!=0)
            {
                swap(nums,i,j);
                i+=1;
                j+=1;
    
            }
            else if(nums[i]==0 && nums[j]==0)
            {
                j+=1;
            }
            else
            {
                i+=1;
                j+=1;
            }
        }
        
    };