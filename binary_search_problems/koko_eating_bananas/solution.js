/**
 * time complexity---O(log(max_element)*size of array)
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    var low=1;
    var high=Math.max(...piles);
    var ans;
   
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        var j=0;
        var req_hours=0;
        while(j<piles.length)
        {
            req_hours=req_hours+Math.ceil(piles[j]/mid);
            j+=1;
                
        }
       
        if(req_hours<=h)
        {
           ans=mid
            high=mid-1;
        }
        else if(req_hours>h)
        {
            low=mid+1;
        }
       

    }

    return ans;
    
};


/**
 * time complexity---O(maxele*size of array)
 * spzce---O(1)
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    var i=1;
    var n=Math.max(...piles);
   
    while(i<=n)
    {
        var j=0;
        var req_hours=0;
        while(j<piles.length)
        {
            req_hours=req_hours+Math.ceil(piles[j]/i);
            j+=1;
                
        }
       
        if(req_hours<=h)
        {
            return i;
        }
        else
        {
            i+=1;
        }

    }
    
};