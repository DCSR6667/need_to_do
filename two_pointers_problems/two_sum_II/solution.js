/**
 * this problem can be solved by brute force approach---O(n2)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var i=0;
    while(i<numbers.length)
    {
        var j=i+1;
        while(j<numbers.length)
        {
            if(numbers[i]+numbers[j]==target)
            {
                return [i+1,j+1];
            }
            j+=1;
        }
        i+=1;
    }
    
};


/**
 * this problem can be solved by hashmap---O(n*hashsearch)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var i=0;
    var m=new Map();
    while(i<numbers.length)
    {
        if(m.has(target-numbers[i]))
        {
            return [m.get(target-numbers[i])+1,i+1];
        }
        m.set(numbers[i],i);
        i+=1;
        
    }
    
};




/**
 * this problem can be solved by two pointers pattern--O(n)
 * space complexity--O(1)
 * @param {number[]} numbers
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
         return [low+1,high+1];
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
