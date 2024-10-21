/**
 * brute force approach---0(n2)
 * space complexity--O(n)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var i=0,max_length=-Infinity,max;
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
            else
            {
                m.set(s[j],1)
            }

     
            max=Math.max(...m.values());
        
            if(((j-i+1)-max)<=k)
            {
                if((j-i+1)>max_length)
                {
                    max_length=j-i+1;
                }
            }
            else
            {
                break;
            }
            
            j+=1;


        }

        i+=1;
    }

    if(max_length>0)
    {
        return max_length;
    }
    else
    {
        return 0;
    }
    
};




/**
 * this problem can be solved by sliding window pattern--O(n+n)
 * space complexity--O(n)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var l=0,r=0,max_length=-Infinity;
    var max;
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


            
            max=Math.max(...m.values());
        
            while(((r-l+1)-max)>k)
            {
                m.set(s[l],m.get(s[l])-1);
                max=Math.max(...m.values());

                if(m.get(s[l])==0)
                {
                    m.delete(s[l]);
                }
                l+=1;
            }

            if((r-l+1)>max_length)
            {
                max_length=r-l+1;
            }
            r+=1;
        
    }

    if(max_length>0)
    {
        return max_length;
    }
    else
    {
        return 0;
    }
    
};



/**
 * this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(n)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var l=0,r=0,max_length=-Infinity;
    var max;
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


            
            max=Math.max(...m.values());
        
            if(((r-l+1)-max)>k)
            {
                m.set(s[l],m.get(s[l])-1);
                max=Math.max(...m.values());

                if(m.get(s[l])==0)
                {
                    m.delete(s[l]);
                }
                l+=1;
            }

            if(((r-l+1)-max)<=k)
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
    else
    {
        return 0;
    }
    
};