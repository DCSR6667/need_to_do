/**
 * brute force approach---O(n+n)
 * space complexity--O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var i=0;
    var c0=0,c1=0,c2=0;
    while(i<nums.length)
    {
        if(nums[i]==0)
        {
            c0+=1;
        }
        else if(nums[i]==1)
        {
            c1+=1;

        }
        else
        {
            c2+=1;
        }
        i+=1;

    }

    i=0;
    while(i<nums.length)
    {

        while(c0>0)
        {
            nums[i]=0;
            c0-=1;
            i+=1;
        }

         while(c1>0)
        {
            nums[i]=1;
            c1-=1;
            i+=1;
        }

         while(c2>0)
        {
            nums[i]=2;
            c2-=1;
            i+=1;
        }

      
    }

    return nums;
    
};







/**
 * this problem can be solved by dutch national flag--O(n)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap=(nums,i,j)=>
    {
        var temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
    
    };
    
    var sortColors = function(nums) {
    
        var low=0,mid=0,high=nums.length-1;
        while(mid<=high)
        {
            if(nums[mid]==0)
            {
                swap(nums,low,mid)
                low+=1;
                mid+=1;
            }
            else if(nums[mid]==2)
            {
                swap(nums,mid,high);
                high-=1;
            }
            else
            {
                mid+=1;
            }
        }
        
    };





// for sorting of four colours---O(n)
// space complexity---O(1)
function dutchNationalFlagSort(nums) {
    let low = 0;    // Pointer to place the next 0
    let mid = 0;    // Pointer to scan the array
    let high = nums.length - 1; // Pointer to place the next 3

    // First pass: Move all 0s to the beginning and 3s to the end
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap current element with the low pointer and move both pointers
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 3) {
            // Swap current element with the high pointer and move the high pointer
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        } else {
            // Move to the next element if it's 1 or 2
            mid++;
        }
    }

    console.log(low,mid,high);
    console.log(nums);

    // Second pass: Sort the section containing 1s and 2s
    

    

    mid = low;

    while (mid <= high) {
        if (nums[mid] === 1) {
            // Swap current element with the low pointer and move both pointers
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 2) {
            mid++;
        }
    }

    return nums;
}

const nums = [3, 3, 2, 1, 0, 2, 1, 3,3,3,2,2,2,0,2,0];
console.log(dutchNationalFlagSort(nums));
