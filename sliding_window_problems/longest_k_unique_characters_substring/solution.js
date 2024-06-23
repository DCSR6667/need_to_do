//User function Template for javascript
/**
 * this problem can be solved by brute force approach--0(n2)
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
    longestKSubstr(s, k) {
        //code here
        var i=0;
        var max_len=-1;
        var j,count;
        var st=new Set();
        while(i<s.length)
        {
            j=i;
            while(j<s.length)
            {
                if(!(st.has(s[j])))
                {
                    st.add(s[j]);
                }
                if(st.size>k)
                {
                    st.clear();
                    break;
                }
                
                if(st.size==k)
                {
                    count=(j-i+1);
                    max_len=Math.max(max_len,count);
                    
                }
                
                j+=1;
            }
            i+=1;
        }
        return max_len;
    }
}



//User function Template for javascript
/**
 * this problem can be solved by sliding window pattern--O(n)
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */


class Solution {
    longestKSubstr(s, k) {
        var l=0;
        var r=0;
        var max_length=-1;
        var m=new Map();
        var ind;
        while(r<s.length)
        {
            m.set(s[r],r);
            
            if(m.size>k)
            {
                var arr=[...m.values()];
                ind=Math.min(...arr);
                m.delete(s[ind]);
                l=ind+1;
                
            }
            if(m.size==k)
            {
                max_length=Math.max(max_length,(r-l+1));
            }
            r+=1;
        

        }
        
        return max_length;
        }
    }