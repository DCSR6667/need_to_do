/**
 * time complexity----O(log(max_element)*length_of_array)
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */


var calculate_sum=(nums,divisor)=>
    {
        var i=0;
        var sum=0;
        while(i<nums.length)
        {
            sum=sum+Math.ceil(nums[i]/divisor);
            i+=1
    
        }
        return sum;
    
    };
    
    var smallestDivisor = function(nums, threshold) {
        var low=1;
        var high=Math.max(...nums);
        var ans;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(calculate_sum(nums,mid)<=threshold)
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

/**
 * 
 *time complexity----O(max_element*length_of_array)
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
 var calculate_sum=(nums,divisor)=>
    {
        var i=0;
        var sum=0;
        while(i<nums.length)
        {
            sum=sum+Math.ceil(nums[i]/divisor);
            i+=1
    
        }
        return sum;
    
    };
    
    var smallestDivisor = function(nums, threshold) {
        var low=1;
        var high=Math.max(...nums);
        while(low<=high)
        {
            if(calculate_sum(nums,low)<=threshold)
            {
                return low;
            }
            low+=1;
        }
        
    };