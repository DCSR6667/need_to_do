/**
 * this problem can be solved by binary search pattern--O(logn)
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var low=0;
    var high=nums.length-1;
    while(low<high)
    {
        var mid=Math.floor((low+high)/2);
        if(nums[mid]==nums[mid-1])
        {
            if((mid-low+1)%2==0)
            {
                low=mid+1;
            }
            else
            {
                high=mid-2;
            }
        }
        else if(nums[mid]==nums[mid+1])
        {
            if((mid-low+2)%2==0)
            {
                low=mid+2;
            }
            else
            {
                high=mid-1;
            }
            
        }
        else
        {
            return nums[mid];
        }

    }
    return nums[low];
    
};



/**
 * time complexity---O(n)
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var i=0;
    var res;
    while(i<nums.length)
    {
        res=res^nums[i];
        i+=1

    }
    return res;
    
};




/**
 * time complexity--O(n)
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var i=0;
    while(i<nums.length-1)
    {
        if(nums[i]==nums[i+1])
        {
            i=i+2;
        }
        else
        {
            return nums[i];
        }
    }
    return nums[i];
    
};