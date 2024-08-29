/**
 * this problem can be solved by brute force approch--O(n+m)
 * space--O(m+n)
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    var i=0;
    var a="";
    var b="";
    while(i<word1.length)
    {
        a=a+word1[i];
        i+=1;

    }
    
    var j=0;
    while(j<word2.length)
    {
        b=b+word2[j];
        j+=1;
    }

    if(a==b)
    {
        return true;
    }
    else
    {
        return false;
    }
    
};





/**
 * this problem can be solved by two pointers approach---O(m+n)
 * space--O(1)
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {

    var i=0,j=0,c1=0,c2=0;
    while(i<word1.length && j<word2.length)
    {
        if(word1[i][c1]!=word2[j][c2])
        {
            return false;
        }
        c1+=1;
        c2+=1;
        if(c1==word1[i].length)
        {
            i+=1;
            c1=0;
        }

        if(c2==word2[j].length)
        {
            j+=1;
            c2=0;
        }

    }

    if(i<word1.length || j<word2.length)
    {
        return false;
    }

    return true;
    
};