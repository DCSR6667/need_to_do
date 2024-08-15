/**
 * this problem can be solved by binary search--O(logn+logn)
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var binary_search=(nums,low,high,target)=>
    {
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(target==nums[mid])
            {
                return true;
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
    
        return false;
    
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
        else if(nums[mid]<=nums[mid+1])
        {
            if(nums[low]<nums[mid])
            {
                low=mid+1;
            }
            else if(nums[low]>nums[mid])
            {
                high=mid-1;
            }
            else 
            {
                if(nums[low]>nums[low+1])
                {
                    return low;
                }
                low=low+1;
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
 * this problem can be solved by binary search pattern---O(logn)
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */


var binary_search=(nums,target,low,high)=>
    {
       while(low<=high)
       {
           var mid=Math.floor((low+high)/2);
           if(nums[mid]==target)
           {
               return true;
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
       return false;
   
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
               if(nums[low]<nums[mid])
               {
                   low=mid+1
   
               }
               else if(nums[low]>nums[mid])
               {
                   high=mid-1;
   
               }
               else
               {
                if(nums[low]>nums[low+1])
                {
                    return low;
                }
                low=low+1;
               }
           }
       }
   
   };
var search = function(nums, target) {
    var peak_index=get_peak_index(nums);
       console.log(peak_index);
       var res=binary_search(nums,target,0,peak_index);
       if(res==false)
       {
        return binary_search(nums,target,peak_index+1,nums.length-1);
       };
       return res;

    
};