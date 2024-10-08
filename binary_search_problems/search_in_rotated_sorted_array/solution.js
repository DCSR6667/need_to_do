/**
 * time complexity--O(logn+logn)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var binary_search=(nums,low,high,target)=>
    {
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(target==nums[mid])
            {
                return mid;
            }
            else if(target>nums[mid])
            {
                low=mid+1;
            }
            else
            {
                high=mid-1;
            }
        }
    
        return -1;
    
    };
    
    var find_pivot=(nums)=>
    {
        var low=0;
        var high=nums.length-1;
        while(low<high)
        {
            var mid=Math.floor((low+high)/2);
            if(nums[mid]>nums[mid+1])
            {
                return mid;
            }
            else if(nums[mid]<nums[mid+1])
            {
                if(nums[low]<=nums[mid])
                {
                    low=mid+1;
                }
                else
                {
                    high=mid-1;
                }
            }
        }
    
        return low;
    
    
    };
    
    var search = function(nums, target) {
    
        var low=0;
        var high=nums.length-1;
        var pivot=find_pivot(nums);
       
        if(target>=nums[low] && target<=nums[pivot])
        {
            return binary_search(nums,low,pivot,target);
        }
        else
        {
            return binary_search(nums,pivot+1,high,target);
        }
    
        
    };


/**
 * binary search--O(logn+logn)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var binary_search=(nums,target,low,high)=>
    {
       while(low<=high)
       {
           var mid=Math.floor((low+high)/2);
           if(nums[mid]==target)
           {
               return mid;
           }
           else if(target>nums[mid])
           {
               low=mid+1;
           }
           else
           {
               high=mid-1;
           }
       }
       return -1;
   
    };
   
   var get_peak_index=(nums)=>
   {
       var low=0;
       var high=nums.length-1;
       while(low<=high)
       {
           var mid=Math.floor((low+high)/2);
           if(nums[mid+1]==undefined)
           {
               return mid;
           }
           if(nums[mid]>nums[mid+1])
           {
               return mid;
           }
           else
           {
               if(nums[low]<=nums[mid])
               {
                   low=mid+1
   
               }
               else
               {
                   high=mid-1;
   
               }
           }
       }
   
   };
   
   var search = function(nums, target) {
       var peak_index=get_peak_index(nums);
       console.log(peak_index);
       if(target>=nums[0] && target<=nums[peak_index])
       {
           return binary_search(nums,target,0,peak_index);
       }
       else
       {
           return binary_search(nums,target,peak_index+1,nums.length-1);
       }
       
   };