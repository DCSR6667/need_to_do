// # split_array_largest_sum====allocate_books===painters_partition_problem

// # time complexity----O(log(sum-max_ele+1)*size_of_array)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

calculate_split=(nums,max_sum)=>
{
    var i=0,sum=0,split=0;
    while(i<nums.length)
    {
        sum=sum+nums[i];
        if(sum<=max_sum)
        {
            i+=1;
        }
        else
        {
            split+=1;
            sum=0;
        }

    }
    if(sum!==0)
    {
        split=split+1;
    }
    return split;

};

var splitArray = function(nums, k) {
    var low=Math.max(...nums);
    var high=0,i=0;
    var ans;
    while(i<nums.length)
    {
        high=high+nums[i];
        i+=1
    }
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        var split=calculate_split(nums,mid);
        console.log(mid,split);
        if(split<=k)
        {
            ans=mid;
            high=mid-1;
        }
        else
        {
            low=mid+1;
        }
        
       
    }
    return ans;
    
    
};

// # time complexity----O((sum-max_ele+1)*size_of_array)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

calculate_split=(nums,max_sum)=>
    {
        var i=0,sum=0,split=0;
        while(i<nums.length)
        {
            sum=sum+nums[i];
            if(sum<=max_sum)
            {
                i+=1;
            }
            else
            {
                split+=1;
                sum=0;
            }
    
        }
        if(sum!==0)
        {
            split=split+1;
        }
        return split;
    
    };
    
    var splitArray = function(nums, k) {
        var low=Math.max(...nums);
        var high=0,i=0;
        while(i<nums.length)
        {
            high=high+nums[i];
            i+=1
        }
        while(low<=high)
        {
            var split=calculate_split(nums,low);
            console.log(low,split);
            if(split<=k)
            {
                return low;
            }
            low+=1;
        }
    
        
        
    };
        