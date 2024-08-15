/**
 * time complexity----O(logn)
 * @param {number} N
 * @returns {number}
*/

class Solution {
    
    floorSqrt(x)
    {
        //your code here
        var low=0;
        var high=x;
        var ans;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(mid*mid==x)
            {
                return mid;
            }
            else if(mid*mid>x)
            {
                high=mid-1;
            }
            else if(mid*mid<x)
            {
                ans=mid;
                low=mid+1;
            }
        }
        return ans;
    }
}



/**
 * time complexity---O(n)
 * @param {number} N
 * @returns {number}
*/

class Solution {
    
    floorSqrt(x)
    {
        //your code here
        var i=0;
        var ans;
        while(i<=x)
        {
            if(i*i<=x)
            {
                ans=i;
                i+=1;
                
            }
            else
            {
               break; 
            }
        }
        return ans;
    }
}