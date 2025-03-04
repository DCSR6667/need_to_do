/**
 * time complexity-----O(log(max_element-min_ele+1)*size_of_array)
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

var no_of_bouq=(nums,day,k,m)=>
    {
        var i=0;
        var count=0;
        var bouq=0;
        while(i<nums.length)
        {
            if(bouq==m)
            {
                return day;
            }
            if(day>=nums[i])
            {
                count+=1;
    
            }
            else
            {
                bouq=bouq+Math.floor(count/k);
                count=0;
            }
            i+=1;
        }
        bouq=bouq+Math.floor(count/k);
        return bouq;
       
    };
    
    
    var minDays = function(bloomDay, m, k) {
        var low=Math.min(...bloomDay);
        var high=Math.max(...bloomDay);
        var ans=-1;
        if(bloomDay.length<(m*k))
        {
            return -1;
        }
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(no_of_bouq(bloomDay,mid,k,m)>=m)
            {
                ans=mid;
                high=mid-1
            }
            else
            {
                low=mid+1;
            }
           
        }
        return ans;
        
    };


/**
 * time complexity----O((max_ele-min_ele+1)*size_of_array)
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

var no_of_bouq=(nums,day,k,m)=>
    {
        var i=0;
        var count=0;
        var bouq=0;
        while(i<nums.length)
        {
            if(bouq==m)
            {
                return day;
            }
            if(day>=nums[i])
            {
                count+=1;
    
            }
            else
            {
                bouq=bouq+Math.floor(count/k);
                count=0;
            }
            i+=1;
        }
        bouq=bouq+Math.floor(count/k);
        return bouq;
       
    
        
    
    
       
    
    };
    
    
    var minDays = function(bloomDay, m, k) {
        var low=Math.min(...bloomDay);
        var high=Math.max(...bloomDay);
        if(bloomDay.length<(m*k))
        {
            return -1;
        }
        while(low<=high)
        {
            console.log(low,no_of_bouq(bloomDay,low,k));
            if(no_of_bouq(bloomDay,low,k,m)>=m)
            {
                return low;
            }
            low+=1;
        }
        return -1;
        
    };