/**
 * this problem can be solved by two pointers approach--O(m+n)
 * space complexity--O(m+n)
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var i=0;
    var j=0;
    var res="";
    while(i<word1.length && j<word2.length)
    {
        res=res+word1[i]+word2[j];
        i+=1;
        j+=1;
        
    }
    while(i<word1.length)
    {
        res=res+word1[i];
        i+=1;
    }

    while(j<word2.length)
    {
        res=res+word2[j];
        j+=1;
    }
    return res;
    
};