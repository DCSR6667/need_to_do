/**
 * this problem can be solved by binary search pattern--o(logn)
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var low=0;
    var high=x;
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        if(x==mid*mid)
        {
            return mid;
        }
        else if(x<mid*mid)
        {
            high=mid-1;
        }
        else
        {
            low=mid+1;
        }
    }
    return high;
};