// this problem can be solved by two pointers approach--O(n+n/2)
// space complexity--O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const reverse=(nums)=>
    {
       var low=0;
       var high=nums.length-1;
       while(low<high)
       {
           var temp=nums[low];
           nums[low]=nums[high];
           nums[high]=temp;
           low+=1;
           high-=1
       }
   
    }
   
   var sortedSquares = function(nums) {
       var low=0;
       var high=nums.length-1;
       var res=[];
       while(low<=high)
       {
           if(Math.abs(nums[low])>Math.abs(nums[high]))
           {
               res.push(nums[low]*nums[low]);
               low+=1;
           }
           else
           {
               res.push(nums[high]*nums[high]);
               high-=1;
           }
   
   
       }
   
       reverse(res);
       return res;
       
       
   };