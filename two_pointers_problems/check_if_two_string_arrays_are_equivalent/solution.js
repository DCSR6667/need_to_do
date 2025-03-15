/**
 * this problem can be solved by brute force approch--O(n+m+max(len(a),len(b)))
 * space--O(m+n)
 */
var arrayStringsAreEqual = function(word1, word2) {
    var a="";
    var b="";
    var i=0;
    while(i<word1.length)
    {
        a=a+word1[i];
        i+=1;
    }
    var i=0;
    while(i<word2.length)
    {
        b=b+word2[i];
        i+=1;
    }
    var i=0,j=0;
    while(i<a.length && j<b.length)
    {
        if(a[i]!=b[j])
        {
            return false;
        }
        i+=1;
        j+=1;
    }
    if(i<a.length || j<b.length)
    {
        return false;
    }
    return true;
};





/**
 * this problem can be solved by two pointers approach---O(m+n)
 * space--O(1)
 /**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {

    var i=0;
    var j=0;
    var a=0,b=0;
    while(i<word1.length && j<word2.length)
    {
        if(word1[i][a]!=word2[j][b])
        {
            return false;
        }
        a+=1;
        b+=1;
        if(a==word1[i].length)
        {
            a=0;
            i+=1;
        }
        if(b==word2[j].length)
        {
            b=0;
            j+=1;
        }

    }
    if(i<word1.length || j<word2.length)
    {
        return false;
    }
    return true;
    
};