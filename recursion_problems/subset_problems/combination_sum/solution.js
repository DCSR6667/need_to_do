/**
 * time complexity--2**k
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var helper=(arr,index,sum,target,res,combined_res)=>
    {
        
        if(sum==target)
        {
            
            combined_res.push([...res]);
            
            return;
        }
        if(index>=arr.length)
        {
            return;
        }
        if(sum>target)
        {
            return;
        }
      
        res.push(arr[index]);
        helper(arr,index,sum+arr[index],target,res,combined_res);
    
        
        res.pop();
        helper(arr,index+1,sum,target,res,combined_res);
        
        return combined_res;
    
    
    };
    
    var combinationSum = function(candidates, target) {
    
        return helper(candidates,0,0,target,[],[]);
        
    };


// Another way of implementation
// time complexity--2**k
// // /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var helper=(arr,index,sum,target,res)=>
//     {
//         var combined_res=[];
        
//         if(sum==target)
//         {
            
//             combined_res.push([...res]);
            
//             return combined_res;
//         }
//         if(index>=arr.length)
//         {
//             return [];
//         }
//         if(sum>target)
//         {
//             return [];
//         }
      
//         res.push(arr[index]);
//         var x=helper(arr,index,sum+arr[index],target,res);
//         combined_res.push(...x);
    
        
//         res.pop();
//         var y=helper(arr,index+1,sum,target,res);
//         combined_res.push(...y);
        
//         return combined_res;
    
    
//     };
    
//     var combinationSum = function(candidates, target) {
    
//         return helper(candidates,0,0,target,[]);
        
//     };