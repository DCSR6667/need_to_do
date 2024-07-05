/**
 * binary search---O(logn)
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function(n) {
    low=1;
    high=n;
    var res;
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        var sum=Math.floor((mid*(mid+1))/2);
        console.log(mid,sum);

        if(sum>n)
        {
            high=mid-1;
        }
        else
        {
            res=mid;
            low=mid+1;

        }
    }
    return res;

    
};




/**
 * time complexity---O(n/2)
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {

    var decrement=1;
    while(true)
    {
        n=n-decrement;
        if(n<0)
        {
            return decrement-1;
        }
        decrement+=1;

    }

};