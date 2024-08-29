/**
 * this problem can be solved by brute force approach
 * time complexity-----O(n3+nlogn)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var i=0;
    var res=[];
    nums.sort((a,b)=>a-b);
    while(i<nums.length)
    {
        if(i>0 && nums[i]==nums[i-1])
        {
            i+=1;
            continue;
        }
        var j=i+1;
        while(j<nums.length)
        {

            if(j>(i+1) && nums[j]==nums[j-1])
            {
                j+=1;
                continue;
            }
            var k=j+1;
            while(k<nums.length)
            {
                if(k>(j+1) && nums[k]==nums[k-1])
                {
                    k+=1;
                    continue;
                }
                if(nums[i]+nums[j]+nums[k]==0)
                {
                    res.push([nums[i],nums[j],nums[k]]);

                }
                k+=1;  
            }
            j+=1; 
        }
        i+=1;
    }
    return res;
    
};





/**
 * this problem can be solved by  hashset---O(nlogn+n2*hashsearch+no_of_triplets*3)
 * space complexity--O(n+no_of_triplets*3)
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
    var i=0;

    var res=new Set();
    nums.sort((a,b)=>a-b);

 
    while(i<nums.length)
    {
       
        var s=new Set();
        var j=i+1;
        while(j<nums.length)
        {
            
            if(s.has((-nums[i]-nums[j])))
            {
                var str=nums[i].toString()+" "+nums[j].toString()+" "+(-nums[i]-nums[j]).toString();
                res.add(str);
                
            }
           
                s.add(nums[j]);
            
            j+=1;

        }
        i+=1;
    }


  
    var res=[...res];
    return res.map(val=>val.split(" "));
   
    
};






/**
 * this problem can be solved by two pointers approach--O(nlogn+n2)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    var i=0;
    var size=nums.length;
    var res=[];
    nums.sort((a,b)=>a-b);
    while(i<size)
    {
        if(i>0 && nums[i]==nums[i-1])
        {
            i+=1;
            continue;
        }
        var low=i+1;
        var high=size-1;
        while(low<high)
        {
            if(low>(i+1) && nums[low]==nums[low-1])
            {
                low+=1;
                continue;
            }
            if(high<(size-1) && nums[high]==nums[high+1])
            {
                high=high-1;
                continue;
            }
            if(nums[i]+nums[low]+nums[high]==0)
            {
                res.push([nums[i],nums[low],nums[high]]);
                low+=1;
                high-=1;
            }
            else if(nums[i]+nums[low]+nums[high]>0)
            {
                high=high-1;
            }
            else
            {
                low=low+1;
            }
        }
        i+=1;
    }
    return res;
    
};