/**
 * this problem can be solved by brute force approach--O(m+n+m)
 * space complexity---O(m+n)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    var l1=[];
    var l2=[];
    var i=0,j=0;
    while(i<s.length)
    {
        if(s[i]!="#")
        {
            l1.push(s[i]);
            i+=1;
        }
        else
        {
            l1.pop();
            i+=1;

        }
    }

     while(j<t.length)
    {
        if(t[j]!="#")
        {
            l2.push(t[j]);
            j+=1;
        }
        else
        {
            l2.pop();
            j+=1;

        }
    }
    

    i=0,j=0;
    while(i<l1.length && j<l2.length)
    {
        if(l1[i]!=l2[j])
        {
            return false;
        }
        i+=1;
        j+=1;
    }
    if(i<l1.length || j<l2.length)
    {
        return false;
    }
    return true;
    
};



/**
 * logic is compare only the valid chars
 * ------------------------------------------- 
 * this problem can be solved by two pointers approach--O(m+n)
 * space complexity--O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const valid_char_index=(str,i)=>
    {
        var backspace=0;
        while(i>=0)
        {
            if(str[i]=="#")
            {
                backspace+=1;
                i-=1;
    
            }
            else if(str[i]!="#" && backspace==0)
            {
                break;
            }
            else if(str[i]!="#" && backspace>0)
            {
                backspace-=1;
                i-=1;
            }
        }
      return i;
    
    };
    
    var backspaceCompare = function(s, t) {
    
        var i=s.length-1;
        var j=t.length-1;
        while(i>=0 || j>=0)
        {
            var i=valid_char_index(s,i);
            var j=valid_char_index(t,j);
            chr1=(i<0)?"":s[i];
            chr2=(j<0)?"":t[j];
            if(chr1!=chr2)
            {
                return false;
            }
            i-=1;
            j-=1;
    
    
    
    
        }
    
        return true;
    
        
        
    };