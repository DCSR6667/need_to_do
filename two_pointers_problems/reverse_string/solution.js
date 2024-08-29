/**
 * this problem can be solved by two pointers approach---O(n/2)
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var low=0;
    var high=s.length-1;
    var temp;
    while(low<high)
    {
        temp=s[low];
        s[low]=s[high];
        s[high]=temp;
        low+=1;
        high-=1;

    }
    
};