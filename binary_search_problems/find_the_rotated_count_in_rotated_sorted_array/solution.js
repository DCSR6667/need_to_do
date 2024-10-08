// time complexity---O(logn)
class Solution {
    find_
    findKRotation(nums) {
        // Code Here
        var low=0;
        var high=nums.length-1;
        while(low<high)
        {
            var mid=Math.floor((low+high)/2);
            if(nums[mid]>nums[mid+1])
            {
                return mid+1;
            }
            else if(nums[mid]<nums[mid+1])
            {
                if(nums[low]<=nums[mid])
                {
                    low=mid+1;
                }
                else
                {
                    high=mid-1;
                }
            }
        }
        
        
        if(low==nums.length-1)
        {
            return 0;
        }
        else
        {
            return low+1;
        }
    }
}



// this problem can be solved by binary search--O(logn)
class Solution {
    findKRotation(arr,n) {
        // code here 
        var low=0;
        var high=arr.length-1;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(arr[mid+1]==undefined)
            {

                return 0;
            }
            if(arr[mid]>arr[mid+1])
            {
                return mid+1;
            }
            else
            {
                if(arr[mid]>=arr[low])
                {
                    low=mid+1;
                }
                else
                {
                    high=mid-1;
                }
            }
        }
    }
}


// linear search--O(n)
class Solution {
    findKRotation(arr,n) {
        // code here 
        var i=0;
        while(i<arr.length-1)
        {
            if(arr[i]>arr[i+1])
            {
                return i+1;
            }
            i+=1;
        }
        return 0;
    }
}