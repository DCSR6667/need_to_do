/**
 * time complexity---O(log(sum-max_ele+1)*size_of_array)
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    var low=Math.max(...weights);
    var high = weights.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var ans;
    while(low<=high)
    {
        var sum=0;
        var req_days=0;
        var j=0;
        var mid=Math.floor((low+high)/2);
        while(j<weights.length)
        {
            sum=sum+weights[j];
            if(sum<=mid)
            {
                j+=1;
            }
            else
            {
                req_days+=1;
                sum=0;
            }
        }
        

        if((req_days+1)>days)
        {
            low=mid+1;

        }
        else
        {
            ans=mid;
            high=mid-1;
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
var shipWithinDays = function(weights, days) {
    var i=Math.max(...weights);
    var n = weights.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    while(i<=n)
    {
        var sum=0;
        var req_days=0;
        var j=0;
        while(j<weights.length)
        {
            sum=sum+weights[j];
            if(sum<=i)
            {
                j+=1;
            }
            else
            {
                req_days+=1;
                sum=0;
            }
        }
        

        if((req_days+1)<=days)
        {
            return i;
        }
        i+=1;
    }
    
};