/**
 * this problem can be solved by binary search pattern--O(logn)
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    var low=0;
    var high=num;
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        if(num==mid*mid)
        {
            return true;

        }
        else if(num>mid*mid)
        {
            low=mid+1;
        }
        else
        {
            high=mid-1;
        }
    }
    return false;

};