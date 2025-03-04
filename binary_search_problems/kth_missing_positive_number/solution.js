/**
 * time complexity----O(logn)
 * space---complexity---O(1)
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    var low=0;
    var high=arr.length-1;
    var mid,no_of_missing_numbers;
    while(low<=high)
    {
         mid=Math.floor((low+high)/2);
         no_of_missing_numbers=arr[mid]-(mid+1);
         if(no_of_missing_numbers<k)
         {
            low=mid+1;
         }
         else if(no_of_missing_numbers>=k)
         {
            high=mid-1;
         }

        
    }

     // arr[high]+(k-(arr[high]-(high+1)));


    return high+1+k;


};




/**
 * time complexity---O(n)
 * space complexity--O(1)
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    var low=0;
    var high=arr.length-1,j;
    while(low<=high)
    {
        var missing_numbers=arr[low]-(low+1);
        if(missing_numbers>=k)
        {
            j=low-1;
            return k+j+1;

        }
        low+=1;

    }
    return k+low;
};