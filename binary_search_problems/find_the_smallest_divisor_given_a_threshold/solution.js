/**
 * time complexity----O(log(max_element)*length_of_array)
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

var sum=(nums,divisor,len)=>
    {
        var i=0;
        var sum=0;
        while(i<len)
        {
            sum=sum+Math.ceil(nums[i]/divisor);
            i+=1;
    
        }
        return sum;
    
    };
    var smallestDivisor = function(nums, threshold) {
    
        var low=1;
        var high=Math.max(...nums);
        var size=nums.length;
        var ans;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(sum(nums,mid,size)<=threshold)
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
var smallestDivisor = function(nums, threshold) {

    var i=1;
    var n=Math.max(...nums);
    while(i<=n)
    {
        var sum=0;
        var j=0;
        while(j<nums.length)
        {
            sum=sum+Math.ceil(nums[j]/i);
            j+=1;
        }
        if(sum<=threshold)
        {
            return i;
        }
        i+=1;
    }
    
};