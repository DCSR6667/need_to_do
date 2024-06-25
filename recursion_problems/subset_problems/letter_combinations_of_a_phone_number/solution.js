/**
 * @param {string} digits
 * @return {string[]}
 */
var phone={2:['a','b','c'],3:['d','e','f'],4:['g','h','i'],
    5:['j','k','l'],6:['m','n','o'],7:['p','q','r','s'],
    8:['t','u','v'],9:['w','x','y','z']
    };
const helper=(digits,res)=>
{
    var combine_res=[];
    if(digits.length==0)
    {
        if(res=="")
        {
            return combine_res;
        }
        combine_res.push(res);
        return combine_res;

    }
    var i=0;
    var arr=phone[digits[0]];
    while(i<arr.length)
    {
        combine_res=combine_res.concat(helper(digits.slice(1),res+arr[i]));
        i+=1;
    }
    return combine_res;

};


var letterCombinations = function(digits) {

    return helper(digits,"");
    

    
};