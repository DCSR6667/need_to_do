/**
 * this problem can be solved by dutch national flag algorithm--O(n)
 * space--O(1)
 * @param {number[]} nums
 * @return {number[]}
 */

const swap=(nums,i,j)=>
    {
        var temp;
        temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
    
    };
    
    var sortArrayByParity = function(nums) {
        var low=0,mid=0,high=nums.length-1;
        while(mid<=high)
        {
            if(nums[mid]%2!=0)
            {
                swap(nums,mid,high);
                high-=1;
            }
            else
            {
                swap(nums,low,mid);
                mid+=1;
                low+=1;
            }
        }
        return nums;
        
    };