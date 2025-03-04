/**
 * time complexity---O(log(max_element)*size of array)
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var calculate_hours=(piles,k)=>
    {
        var i=0;
        var hours=0;
        while(i<piles.length)
            {
                hours=hours+Math.ceil(piles[i]/k);
                i+=1;
    
            }
        return hours;
    
    
    };
    
    var minEatingSpeed = function(piles, h) {
        var low=1;
        var ans;
        var high=Math.max(...piles);
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(calculate_hours(piles,mid)<=h)
            {
                ans=mid
                high=mid-1
            }
            else
            {
                low=mid+1
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
var calculate_hours=(piles,k)=>
    {
        var i=0;
        var hours=0;
        while(i<piles.length)
            {
                hours=hours+Math.ceil(piles[i]/k);
                i+=1;
    
            }
        return hours;
    
    
    };
    
    var minEatingSpeed = function(piles, h) {
        var k=1;
        var max=Math.max(...piles);
        while(k<=max)
        {
        
            if(calculate_hours(piles,k)<=h)
            {
                return k;
            }
            k+=1;
    
        }
        
    };