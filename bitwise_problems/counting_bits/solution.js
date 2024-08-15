/**
 * time complexity-----O(n*log(no of set bits))
 * @param {number} n
 * @return {number[]}
 */

var count_set_bits=(num)=>
    {
        var count=0;
        while(num>0)
        {
            num=num&(num-1);
             count+=1;
        }
        return count;
    
    };

    
var countBits = function(n) {

    var res=[];
    var i=0;
    while(i<=n)
    {
        var ans=count_set_bits(i);
        res.push(ans);
        i+=1;
    }
    return res;
    
};