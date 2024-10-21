
/**
 * brute force approach--O(n2)
 * space complexity--O(k)
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
    longestKSubstr(s, k) {
        //code here
        var i=0,max_length=-Infinity;
        while(i<s.length)
        {
            var j=i;
            var m=new Map();
            while(j<s.length)
            {
                if(m.has(s[j]))
                {
                    m.set(s[j],m.get(s[j])+1);
                }
                else{
                    m.set(s[j],1);
                }
    
                if(m.size>k)
                {
                    break;
                }
                
                if(m.size==k)
                {
                    if((j-i+1)>max_length)
                    {
                        max_length=j-i+1;
                    }
                }
               
                j+=1;
    
            }
            i+=1;
        }
    
        if(max_length>0)
        {
            return max_length;
        }
        else{
            return -1;
        }

    }
}






/**
 *  this problem can be solved by sliding window pattern--O(n+n)
 * space complexity--O(k)
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
    longestKSubstr(s, k) {
        //code here
        
        var l=0,r=0,max_length=-Infinity;
        var m=new Map();
        while(r<s.length)
        {
            if(m.has(s[r]))
            {
                m.set(s[r],m.get(s[r])+1);
            }
            else
            {
                m.set(s[r],1);
            }
    
            while(m.size>k)
            {
                m.set(s[l],m.get(s[l])-1);
                if(m.get(s[l])==0)
                {
                    m.delete(s[l]);
                }
                l+=1;
            }
            
            if(m.size==k)
            {
                 if((r-l+1)>max_length)
                    {
                        max_length=r-l+1;
                    }
            }
    
           
            r+=1;
    
    
        }
    
        if(max_length>0)
        {
            return max_length;
        }
        else{
            return -1;
        }
    }
}





/**this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(k)
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
    longestKSubstr(s, k) {
        //code here
        
            var l=0,r=0,max_length=-Infinity;
            var m=new Map();
            while(r<s.length)
            {
                if(m.has(s[r]))
                {
                    m.set(s[r],m.get(s[r])+1);
                }
                else
                {
                    m.set(s[r],1);
                }
        
                if(m.size>k)
           
                    {
                    m.set(s[l],m.get(s[l])-1);
                    if(m.get(s[l])==0)
                    {
                        m.delete(s[l]);
                    }
                    l+=1;
                }
    
                if(m.size==k)
                {
                    if((r-l+1)>max_length)
                        {
                            max_length=r-l+1;
                        }
    
                }
        
               
                r+=1;
        
        
            }
        
            if(max_length>0)
            {
                return max_length;
            }
            else{
                return -1;
            }
    }
}