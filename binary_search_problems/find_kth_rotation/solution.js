// this problem can be solved by binary search pattern--O(logn)
// space complexity--O(1)
class Solution {
    findKRotation(arr) {
       var low=0;
       var high=arr.length-1;
       var size=high+1
       while(low<high)
       {
           var mid=Math.floor((low+high)/2);
           if(arr[mid]>arr[mid+1])
           {
               return mid+1;
           }
           else if(arr[mid]<arr[mid+1])
           {
               if(arr[low]<=arr[mid])
               {
                   low=mid+1;
               }
               else
               {
                   high=mid-1;
               }
           }
           
       }
       if(low+1==size)
       {
           return 0;
       }
       return low+1;
       
    }
}
