/**
 * brute force approach---O(n2)
 * space complexity--O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max_len=-Infinity,i=0;
    while(i<s.length)
    {
        var j=i;
        var hs=new Set();
        while(j<s.length)
        {
            if(!(hs.has(s[j])))
            {
                hs.add(s[j]);

            }
            else
            {
                break;
            }
            if((j-i+1)>max_len)
            {
                max_len=(j-i+1);
            }

            j+=1;
        }
        i+=1;
    }

    if(max_len>0)
    {
        return max_len;
    }
    else
    {
        return 0;
    }

    
};





/**
 * this problem can be solved by using sliding window--O(n+n)
 * space complexity---O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var l=0,r=0,max_len=-Infinity;
    var hs=new Set();
    while(r<s.length)
    {
        while(hs.has(s[r]))
        {
            hs.delete(s[l]);
            l+=1;
        }

        hs.add(s[r]);
        if((r-l+1)>max_len)
        {
            max_len=(r-l+1);
        }
        r+=1;

    }

    if(max_len>0)
    {
        return max_len;
    }
    else
    {
        return 0;
    }
    
};





/**
 * this problem can be solved by using sliding window--O(n)
 * space complexity---O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var l=0,r=0,max_len=-Infinity;
    var hs=new Set();
    while(r<s.length)
    {
        if(hs.has(s[r]))
        {
            hs.delete(s[l]);
            l+=1;
        }

        if(!(hs.has(s[r])))
        {
            hs.add(s[r]);
            if((r-l+1)>max_len)
            {
                max_len=(r-l+1);
            }
            r+=1;

        }

        

    }

    if(max_len>0)
    {
        return max_len;
    }
    else
    {
        return 0;
    }
    
};