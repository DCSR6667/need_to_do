/**
 * this problem can be solved by two pointers approach---O(n)
 * @param {string} s
 * @return {boolean}
 */

const tolower=(chr)=>
    {
        if(chr>="A" && chr<="Z")
        {
            return String.fromCharCode((chr.charCodeAt(0)+32));
    
        }
        return chr;
    
    
    };
    
    const isalphanumeric=(chr)=>
    {
        if((chr>="A" && chr<="Z") || (chr>="a" && chr<="z") || (chr>="0" && chr<="9"))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    
    var isPalindrome = function(s) {
        var low=0;
        var high=s.length-1;
        
        while(low<high)
        {
            while((low<high) && !(isalphanumeric(s[low])))
            {
                low=low+1;
            }
            while((low<high) && !(isalphanumeric(s[high])))
            {
                high=high-1;
            }
            if(low>=high)
            {
                return true;
            }
            if(tolower(s[low])!=tolower(s[high]))
            {
               
                return false;
    
            }
            low+=1;
            high-=1;
        }
        return true;
    
        
    };