/**
 * 
 * this problem can be solved by brute force approach ---O(n2)
it depends on no of replacements
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var i=0;
    var max_length=Math.log(0);
    var j,no_of_replacements,l,sum,max_ind;
    var m=new Map();
    while(i<s.length)
    {
        j=i;
        while(j<s.length)
        {
            if(!(m.has(s[j])))
            {
                m.set(s[j],1);
            }
            else
            {
                m.set(s[j],m.get(s[j])+1);
            }

            l=[...m.values()];
            sum = l.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            max_ind=Math.max(...l);
            no_of_replacements=(sum-max_ind);
            if(no_of_replacements>k)
            {
                m.clear();
                break;

            }
            max_length=Math.max(max_length,(j-i+1));
            j+=1;
        }
        i+=1;
    } 
    return max_length;
    
};






/**
 * this below approch is sliding window approach----O(n)
it depends on no of replacements
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var l=0;
    var r=0;
    var m=new Map();
    var max_length=Math.log(0);
    var sum,max_ind,no_of_replacements;
    while(r<s.length)
    {
        if(!(m.has(s[r])))
        {
            m.set(s[r],1);
        }
        else
        {
            m.set(s[r],m.get(s[r])+1);
        }
        lt=[...m.values()];
        sum = lt.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        max_ind=Math.max(...lt);
        no_of_replacements=(sum-max_ind);
        if(no_of_replacements>k)
        {
            m.set(s[l],m.get(s[l])-1);
            l=l+1;

        }
        max_length=Math.max(max_length,(r-l+1));
        r+=1;

    }
    return max_length;
    
};