/**
 * this problem can be solved by brute force approach---O(n*m)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


var isSubsequence = function(s, t) {
    var i=0,j=0;
    
    while(i<s.length)
    {
        var flag=0;
        console.log(j);
        
        while(j<t.length)
        {
            if(s[i]==t[j])
            {
                j=j+1;
                flag=1;
                break;
            }
            j+=1;
        }
        if(flag==0)
        {
             return false;
        }
        i+=1;
       
    }
    return true;

    
};


/**
 * this problem can be solved by two pointers approach---O(m+n)
 * space complexity--O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var i=0,j=0;
    while(i<s.length && j<t.length)
    {
        if(s[i]==t[j])
        {
            i+=1;
            j+=1;
        }
        else
        {
            j+=1;
        }
    }

    if(i==s.length)
    {
        return true;
    }
    else
    {
        return false;
    }
    
};