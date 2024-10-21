/**
 * brute force approach----O(n2)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    var max_len=-Infinity,i=0;
    while(i<nums.length)
    {
        var j=i;
        var count=0;
        while(j<nums.length)
        {
            if(nums[j]==0) 
            {
                count+=1;
            }  
            if(count>k)
            {
                break;
            }
            if((j-i+1)>max_len)
            {
                max_len=(j-i+1);
            }
            j+=1;
        }   

        i+=1;  
    }

    if(max_len>0)
    {
        return max_len;
    }
    else
    {
        return 0;
    }
};







/**
 * this problem can be solved by sliding window pattern--O(n+n)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    var l=0,r=0,max_len=-Infinity,count=0;
    while(r<nums.length)
    {
        if(nums[r]==0)
        {
            count+=1;
        }
        while(count>k)
        {
            if(nums[l]==0)
            {
                count-=1;
            }
            l+=1;
        }

        if((r-l+1)>max_len)
        {
            max_len=(r-l+1);
        }
        r+=1;
    }

    if(max_len>0)
    {
        return max_len;
    }
    else
    {
        return 0;
    }
    
};




/**
 * 
 * this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    var l=0,r=0,max_len=-Infinity,count=0;
    while(r<nums.length)
    {
        if(nums[r]==0)
        {
            count+=1;
        }
        if(count>k)
        {
            if(nums[l]==0)
            {
                count-=1;
            }
            l+=1;
        }

        if(count<=k)
        {
             if((r-l+1)>max_len)
                {
                    max_len=(r-l+1);
                }
        }

       
        r+=1;
    }

    if(max_len>0)
    {
        return max_len;
    }
    else
    {
        return 0;
    }
    
};


