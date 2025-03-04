/**
 * time complexity---O(log(sum-max_ele+1)*size_of_array)
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var calculate_required_days=(weights,max_capacity)=>
    {
        var i=0;
        var sum=0;
        var total_days=0;
        while(i<weights.length)
        {
            sum=sum+weights[i];
            if(sum>max_capacity)
            {
                total_days+=1;
                sum=0;
    
            }
            else
            {
                i+=1;
            }
    
    
    
        }
        if(sum<=max_capacity)
        {
            total_days+=1;
        }
        return total_days;
    
    };
    
    var summation=(weights)=>
    {
        var sum=0;
        var i=0;
        while(i<weights.length)
        {
            sum=sum+weights[i];
            i+=1;
        }
        return sum;
    }
    
    
    var shipWithinDays = function(weights, days) {
        var low=Math.max(...weights);
        var high=summation(weights);
        var ans;
        while(low<=high)
        {
    
            var mid=Math.floor((low+high)/2); 
            if(calculate_required_days(weights,mid)<=days)
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
 * time complexity---O((sum-max_ele+1)*size_of_array)
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

var calculate_required_days=(weights,max_capacity)=>
    {
        var i=0;
        var sum=0;
        var total_days=0;
        while(i<weights.length)
        {
            sum=sum+weights[i];
            if(sum>max_capacity)
            {
                total_days+=1;
                sum=0;
    
            }
            else
            {
                i+=1;
            }
    
    
    
        }
        if(sum<=max_capacity)
        {
            total_days+=1;
        }
        return total_days;
    
    };
    
    const summation=(weights)=>
    {
        var sum=0;
        var i=0;
        while(i<weights.length)
        {
            sum=sum+weights[i];
            i+=1;
        }
        return sum;
    }
    
    
    var shipWithinDays = function(weights, days) {
        var low=Math.max(...weights);
        var high=summation(weights);
        while(low<=high)
        {
            console.log(low,calculate_required_days(weights,low));
            if(calculate_required_days(weights,low)<=days)
            {
                return low;
    
            }
            low+=1;
        }
    
        
    };