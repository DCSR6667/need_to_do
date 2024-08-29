/**
 * this problem can be solved by brute force approach
 * time complexity---O(n2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var i=0;
    while(i<nums.length)
    {
        var j=i+1;
        while(j<nums.length)
        {
            if(nums[i]+nums[j]==target)
            {
                return [i,j];
            }
            j+=1;
        }
        i+=1;
    }
    
};


/**
 * this problem can be solved by two pointers approach--O(nlogn+n)
 * space--O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var low=0;
    var high=nums.length-1;
    nums.sort((a,b)=>a-b);
    while(low<high)
    {
     var sum=nums[low]+nums[high];
     if(sum==target)
     {
         return [low,high];
     }
     else if(sum>target)
     {
         high-=1;
     }
     else
     {
         low+=1;
     }
    }
     
 };


 /**
  * this problem can be solved by hash map ---O(n*hashsearch)
  * space complexity--O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    var i=0;
    while(i<nums.length)
    {
        if(map.has(target-nums[i]))
        {
            return [i,map.get(target-nums[i])];
        }
        else
        {
            map.set(nums[i],i);
        }
        i+=1;
    }

    
};