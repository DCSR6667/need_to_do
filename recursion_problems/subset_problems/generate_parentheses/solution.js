/**
 * @param {number} n
 * @return {string[]}
 */

const helper=(open,close,res,combined_res)=>
    {
        if(open==0 && close==0)
        {
                combined_res.push(res);
                return;
        }
        if(open!=0)
        {
            helper(open-1,close,res+"(",combined_res);
    
        }
        if(close!=open)
        {
            helper(open,close-1,res+")",combined_res);
    
        }
    
    };
    
    var generateParenthesis = function(n) {
        var combined_res=[];
        helper(n,n,"",combined_res);
        return combined_res;
    };