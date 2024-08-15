/**
 * time complexity -----O(nlogn+(2**n)*n)
 * space compelxity----O(n+(2**n)*k)
 * @param {number[]} nums
 * @return {number[][]}
 */

const helper=(nums,i,res,combined_res)=>
    {
        
            combined_res.push([...res]);
            
        var index=i;
        while(index<nums.length)
        {
            if(index>i && nums[index]==nums[index-1])
            {
                index+=1;
                continue;
            }
            res.push(nums[index]);
            helper(nums,index+1,res,combined_res);
            res.pop();
    
            index+=1;
    
        }
        
           
        
        
        
    
    };
    
    var subsetsWithDup = function(nums) {
        nums.sort((a,b)=>a-b);
        var combined_res=[];
        helper(nums,0,[],combined_res);
        return combined_res;
    
        
    };