/**
 * time complexity-----O(n2)
 * @param {string} s
 * @return {string[]}
 */

const islowercase=(chr)=>
    {
        if(chr>='a' && chr<='z')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    const isuppercase=(chr)=>
    {
        if(chr>='A' && chr<='Z')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    const helper=(s,i,res,combined_res)=>
    {
        if(i>=s.length)
        {
            combined_res.push(res);
            return;
        }
        if(islowercase(s[i]))
        {
            helper(s,i+1,res+s[i],combined_res);
            helper(s,i+1,res+s[i].toUpperCase(),combined_res);
        }
        else if(isuppercase(s[i]))
        {
            helper(s,i+1,res+s[i],combined_res);
            helper(s,i+1,res+s[i].toLowerCase(),combined_res);
        }
        else
        {
            helper(s,i+1,res+s[i],combined_res);
        }
    
    };
    
    var letterCasePermutation = function(s) {
        var combined_res=[];
        helper(s,0,"",combined_res);
        return combined_res;
        
    };