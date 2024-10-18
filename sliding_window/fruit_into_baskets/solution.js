/**
 * this problem can be solved by brute force approach---O(n2)
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    var i=0;
    var max_fruits=Math.log(0);
    var j,count;
    var s=new Set();
    while(i<fruits.length)
    {
        j=i;
        count=0;
        while(j<fruits.length)
        {
            if(!(s.has(fruits[j])))
            {
                s.add(fruits[j]);
            }
            if(s.size>2)
            {
                s.clear();
                break;
            }
            count=j-i+1;
            max_fruits=Math.max(max_fruits,count);
            j+=1;

        }
        i+=1;
    }
    return max_fruits;
    
};




/**
 * this problem can be solved by sliding window pattern ---O(n)
and the window size must be two distinct fruits
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    var l=0;
    var r=0;
    var max_fruits=Math.log(0);
    var m=new Map();
    var count,ind;
    while(r<fruits.length)
    {

            m.set(fruits[r],r);
        
        if(m.size>2)
        {
            var a=[...m.values()];
            ind=Math.min(...a);
            m.delete(fruits[ind]);
            l=ind+1;
        }
        count=(r-l+1);
        max_fruits=Math.max(max_fruits,count);
        r+=1;
    }
    return max_fruits;
    
};