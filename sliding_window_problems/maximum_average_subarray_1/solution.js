/**
 * brute force appraoch--O(n2)
 * space complexity---O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var i=0,max_avg=-Infinity,avg;
    while(i<nums.length)
    {
        var j=i;
        var sum=0;
        while(j<nums.length)
        {
            sum=sum+nums[j];
            if((j-i+1)==k)
            {
                avg=sum/k;
                if(avg>max_avg)
                {
                    max_avg=avg;
                }
                break;
                
            }
            j+=1;

        }
        i+=1;
    }

    return max_avg;
    
};



/**
 * this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var l=0,r=0,max_avg=-Infinity,avg,sum=0;
    while(r<nums.length)
    {
        sum=sum+nums[r];
        if((r-l+1)==k)
        {
            avg=sum/k;
            if(avg>max_avg)
            {
                max_avg=avg;
            }
            sum=sum-nums[l];
            l+=1;
        }
        r+=1;
    }

    return max_avg;
    
};