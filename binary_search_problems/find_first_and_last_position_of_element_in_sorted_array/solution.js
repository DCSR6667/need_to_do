/**
 * binary search ----O(logn)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const search=(nums,target,firstbool)=>
    {
        var ans=-1;
        var low=0;
        var high=nums.length-1;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(target>nums[mid])
            {
                low=mid+1;
            }
            else if(target<nums[mid])
            {
                high=mid-1;
            }
            else
            {
               
                if(firstbool)
                {
                    
                    ans=mid;
                    high=mid-1;
    
                }
                else
                {
                    ans=mid;
                    low=mid+1;
    
                }
            }
          
        }
    
          return ans;
    
    
    };
    var searchRange = function(nums, target) {
    
        var first=search(nums,target,true);
        if(first==-1)
        {
            return [-1,-1];
        }
        else
        {
            var last=search(nums,target,false);
            return [first,last];
        }
    
      
       
    };



/**
 * linear search----O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var i=0;
    var res=[-1,-1];
    while(i<nums.length)
    {
        if(nums[i]==target)
        {
            res[0]=i
            while(i<nums.length && nums[i]==nums[i+1])
            {
            i=i+1;

            }
        res[1]=i;
        }
        i+=1;
        

    }
    return res;
    
};