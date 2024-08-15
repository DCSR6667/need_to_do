/**
 * time complexity----O(1)
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {

    if(n==0)
    {
        return false;
    }
    if(n<0)
    {
        return false;
    }
    var res=n&(n-1);
    if(res==0)
    {
        return true;
    }
    else
    {
        return false;
    }
    
};






/**
 * time complexity ---O(no of set bits)
 * @param {number} n
 * @return {boolean}
 */

var count_no_of_1=(n)=>
    {
        var count=0;
        while(n>0)
        {
            n=n&(n-1);
            count+=1
        }
    
        return count
    
    };
    
    var isPowerOfTwo = function(n) {
        if(n<=0)
        {
            return false;
        }
        var count=count_no_of_1(n);
        if(count==1)
        {
            return true;
    
        }
        else
        {
            return false;
        }
    
        
    };