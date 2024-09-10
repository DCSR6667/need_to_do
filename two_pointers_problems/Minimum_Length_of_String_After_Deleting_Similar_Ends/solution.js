/**
 * this problem can be solved by two pointers --O(n)
 * space complexity--O(1)
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {

    var i=0;
    var size=s.length;
    var j=size-1;
    while(i<j)
    {
        if(s[i]==s[j])
        {
             while(i<size-1 && s[i]==s[i+1])
            {
                i+=1;
            }
            while(j>0 && s[j]==s[j-1])
            {
                j-=1;
            }
            i+=1;
            j-=1;

        }
        else
        {
            return (j-i+1);
        }
       
        

    }

    if(i==j)
    {
        return 1;
    }
    return 0;
    
};