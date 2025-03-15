/**
 * time complexity----O(n)
 * space complesity--O(1)
 * @param {string} s
 * @return {boolean}
 */

const isalphanumeric=(chr)=>
    {
        if((chr>='A' && chr<='Z') || (chr>='a' && chr<='z') ||  (chr>="0" && chr<="9"))
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
           
            while((low<=high) && !isalphanumeric(s[low]))
            {
                low+=1;
    
            }
            if(low>high)
            {
                return true;
            }
            while((high>low) && !isalphanumeric(s[high]))
            {
                high-=1;
    
            }
    
          
    
            if(s[low].toLowerCase()!=s[high].toLowerCase())
            {
                return false;
    
            }
            low+=1;
            high-=1;
    
        }
        return true;
        
    };