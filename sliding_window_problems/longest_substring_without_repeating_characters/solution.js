/**
 * the below approach is brute force approach where we took set to get result ----O(n2)
space---O(n2)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var i=0;
    var max_length=Math.log(0);
    var count,j;
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
            else
            {
                st.clear();
                break;
            }
            count=(j-i+1);
            max_length=Math.max(max_length,count);
            j+=1;

        }
        i+=1;
    }

    if(max_length==Math.log(0))
    {
        return 0;
    }
    else
    {
        return max_length;

    }
    
    
};







/**
 * this problem can be solved by  sliding window problem----O(n)
space-----O(n)

 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var l=0;
    var r=0;
    var max_len=Math.log(0);
    var st=new Set();
    while(r<s.length)
    {
        if(!(st.has(s[r])))
        {
            st.add(s[r]);
            max_len=Math.max(max_len,st.size);
            r+=1;
        }
        else
        {
            st.delete(s[l]);
            max_len=Math.max(max_len,st.size);
            l+=1
        }

    }
    if(max_len==Math.log(0))
    {
        return 0;
    }
    else
    {
        return max_len;

    }
    
    
};