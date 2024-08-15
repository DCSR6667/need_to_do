/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const helper=(ele,res,combined_res,n,k)=>
    {
        if(k==0)
        {
            combined_res.push([...res]);
            return;
        }
        var i=1;
        while(i<=(n-ele))
        {
            res.push(ele+i);
            helper(ele+i,res,combined_res,n,k-1);
            res.pop();
            i+=1;
        }
    
    };
    
    var combine = function(n, k) {
        var combined_res=[];
        helper(0,[],combined_res,n,k);
        return combined_res;
        
    };