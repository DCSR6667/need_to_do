/**
 * assume diagram for better view
 * this problem can be solved by binary search pattern--O(logn)
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    var low=0;
    var high=arr.length-1;
    var prev,next;
    while(low<high)
    {
        var mid=Math.floor((low+high)/2);
        prev=(mid>0)?arr[mid-1]:-1;
        next=(mid<arr.length-1)?arr[mid+1]:-1;
        curr=arr[mid];
     
        if(curr>prev && curr>next)
        {
            return mid;
        }
        else if(curr>prev && curr<next)
        {
            low=mid+1; 
        }
        else if(curr<prev && curr>next)
        {
            high=mid-1;
        }

    }
    return low;
    
};