/**
 * 
 * this problem can be solved by bitwise operators --O(n+n)
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var res=0;
    var i=0;
    while(i<s.length)
    {
        res=res^(s.charCodeAt(i));
        i+=1;
    }
    var j=0;
    while(j<t.length)
    {
        res=res^(t.charCodeAt(j));
        j+=1;
    }
    return String.fromCharCode(res);
    
};