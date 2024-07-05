/**
 * this problem can be solved by binary search--O(logn)
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(a) {
    var low=0;
    var high=a.length-1;
    
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);

        // handling edge cases---
        if(a[mid+1]==undefined || a[mid-1]==undefined)
        {
        if(low==high)
        {
            return mid;
        }
        if((high-low+1)==2)
        {
            if(a[low]>a[high])
            {
                return low;
            }
            else
            {
                return high;
            }
        }

        }
       
       
        if(a[mid]>a[mid+1] && a[mid]>=a[mid-1])
        {
            return mid;
        }
        else if((a[mid]>a[mid+1] ) && (a[mid]<a[mid-1]))
        {
            high=mid-1;
        }
        else if(a[mid]<a[mid+1])
        {
            low=mid+1;


        }
        
    }

    
    
};