/**
 * this problem can be solved by two pointers appraoch---O(n*m/2)
 * space--O(1)
 * @param {string[]} words
 * @return {string}
 */

const ispalindrome=(str)=>
    {
        var i=0;
        var j=str.length-1;
        while(i<j)
        {
            if(str[i]!=str[j])
            {
                return false;
            }
            i+=1;
            j-=1;
        }
        return true;
    
    };
    
    var firstPalindrome = function(words) {
        var i=0;
        while(i<words.length)
        {
            if(ispalindrome(words[i]))
            {
                return words[i];
            }
            i+=1;
        }
        return "";
        
    };
