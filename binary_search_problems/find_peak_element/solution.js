/**
 * assume diagram for better view
 * this question cna be solved by binary search pattern-----O(logn)
 * @param {number[]} nums
 * @return {number}
 */


var findPeakElement = function(arr) {
    var low=0;
   var high=arr.length-1;
   var prev,next;
   while(low<high)
   {
       var mid=Math.floor((low+high)/2);
       prev=(mid>0)?arr[mid-1]:-Infinity;
       next=(mid<arr.length-1)?arr[mid+1]:-Infinity;
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
       else if(curr<prev && curr<next)
       {
           low=mid+1;
       }

   }
   return low;
   
   
};