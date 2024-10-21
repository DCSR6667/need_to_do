/**
 * brute force approach---O(n2)
 * space complexity--O(1)
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    var i=0,max_length=-Infinity;
    while(i<fruits.length)
    {
        var j=i;
        var hs=new Set();
        while(j<fruits.length)
        {
            if(!(hs.has(fruits[j])))
            {
                hs.add(fruits[j]);
            }

            if(hs.size<=2)
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
 * space complexity--O(1)
 * @param {number[]} fruits
 * @return {number}
 */

var totalFruit = function(fruits) {
    var l=0,r=0,max_length=-Infinity;
    var m=new Map();
    while(r<fruits.length)
    {
        if(m.has(fruits[r]))
        {
             m.set(fruits[r],m.get(fruits[r])+1);
            
        }
        else
        {
            m.set(fruits[r],1);
        }

        while(m.size>2)
        {
             m.set(fruits[l],m.get(fruits[l])-1);
             if(m.get(fruits[l])==0)
             {
                m.delete(fruits[l]);
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
 *  this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(1)
 * @param {number[]} fruits
 * @return {number}
 */

var totalFruit = function(fruits) {
    var l=0,r=0,max_length=-Infinity;
    var m=new Map();
    while(r<fruits.length)
    {
        if(m.has(fruits[r]))
        {
             m.set(fruits[r],m.get(fruits[r])+1);
            
        }
        else
        {
            m.set(fruits[r],1);
        }

        if(m.size>2)
        {
             m.set(fruits[l],m.get(fruits[l])-1);
             if(m.get(fruits[l])==0)
             {
                m.delete(fruits[l]);
             }
             l+=1;

        }

        if(m.size<=2)
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