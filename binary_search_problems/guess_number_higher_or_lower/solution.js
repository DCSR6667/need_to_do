/** 
 * binary search---O(logn)
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {

    var low=1;
    var high=n;
    while(low<=high)
    {
        
        var mid=Math.floor((low+high)/2);
        console.log(low,mid,high);
        if(guess(mid)==0)
        {
            return mid;
        }
        else if(guess(mid)==-1)
        {
             high=mid-1;

        }
        else
        {
            low=mid+1;
           
        }
    }
    
};






/** 
 * time complexity-----O(n)
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
   
    while(true)
    {

        var res=guess(n);
        if(res==0)
        {
            return n;
        }
        else if(res==-1)
        {
        n=n-1;
        }
        else
        {
        n+=1;
        }

    }
    
    
};