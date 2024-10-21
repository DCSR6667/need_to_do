/**
 * brute force approach---O(n2)
 * space complexity---O(1)
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    var i=0,count=0;
    var size=s.length;
    while(i<size)
    {
        var j=i;
        var hs=new Set();
        while(j<size)
        {
            if(!(hs.has(s[j])))
            {
                hs.add(s[j]);
            }
            if(hs.size==3)
            {
                count=count+((size-j));
                break;

            }
            j+=1;

        }
        i+=1;
    }

    return count;
    
};






/**
 * this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(1)
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    var l=0,r=0,count=0,min;
    var hm=new Map();
    while(r<s.length)
    {
        hm.set(s[r],r);
        if(hm.size==3)
        {
            min=Math.min(...hm.values());
            count=count+(min+1);

        }
        r+=1;

    }

    return count;
    
};