/**
 * this problem can be solved by binary search--O(logn)
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {

    var low=0;
    var high=arr.length-1;
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        if((arr[mid]>arr[mid+1]) && (arr[mid]>=arr[mid-1]))
        {
            return mid;
        }
        else if((arr[mid]>arr[mid+1]) && (arr[mid]<arr[mid-1]))
        {
            high=mid-1;
        }
        else if(arr[mid]<=arr[mid+1])
        {
            low=mid+1;
        }
    }

    return Infinty;
    
};