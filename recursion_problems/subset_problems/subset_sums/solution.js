/**
 * time complexity----O(2**n)
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
*/

class Solution {
    helper(arr,i,n,sum,combined_res)
    {
        if(i>=n)
        {
            combined_res.push(sum);
            return;
            
        }
        this.helper(arr,i+1,n,sum+arr[i],combined_res);
        this.helper(arr,i+1,n,sum,combined_res);
        
    }
    subsetSums(arr,n){
       //code here
       var combined_res=[];
       this.helper(arr,0,n,0,combined_res);
       combined_res.sort((a,b)=>a-b);
       return combined_res;
    }
}
