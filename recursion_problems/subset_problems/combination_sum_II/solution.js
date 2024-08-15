/**
 * time complexity---O(nlogn+(2**n)*k)
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var helper=(arr,i,target,res,combined_res)=>
    {
        if(target==0)
        {
            combined_res.push([...res]);
            return;
    
        }
        if(i>=arr.length)
        {
            return;
        }
    
        
    
        var index=i;
    
        while(index<arr.length)
        {
            if(index>i && arr[index]==arr[index-1])
            {
                index+=1;
                continue;
            }
    
            if(target<arr[index])
            {
                break;
            }
           
                res.push(arr[index]);
                helper(arr,index+1,target-arr[index],res,combined_res);
                res.pop();
           
            index+=1
        }
       
    };
    
    var combinationSum2 = function(candidates, target) {
        var combined_res=[];
        candidates.sort((a, b) => a - b);
        helper(candidates,0,target,[],combined_res);
        return combined_res;
        
    };