/**
 * time compelxity---O(logn)
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if(n==0)
    {
        return 1;
    }
    var i=0;
    var res=0,bit;
    while(n>0)
    {
        bit=((n&1)^1)<<i;
        i=i+1;
        res=res | bit;
        n=n>>1;
    }
    return res;
    
};