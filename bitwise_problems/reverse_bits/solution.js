/**
 * take the last bit
 * and right shift the number by one 
 * and left shift the last digit by suitable position and add to the result
 * time complexity---O(1)
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var i=1;
    var last,left_shift,res=0;
    while(i<=32)
    {
        last=(n & 1);
        n=n>>1;
        left_shift=last<<(32-i);
        res=(res|left_shift);
        i+=1;

    

    }
    return res>>>0;
    

    
};