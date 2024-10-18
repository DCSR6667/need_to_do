/**
 * this problem can be solved by brute force approach---O(n2)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var isvowel=function(chr)
{
   if(chr=='a'||chr=='e'||chr=='i'||chr=='o'||chr=='u')
   {
       return true;
   }
   else
   {
       return false;
   }

};


var maxVowels = function(s, k) {
   var i=0;
   var count,j;
   var max_length=Math.log(0);
   while(i<s.length)
   {
       j=i;
       count=0;
       while(j<i+k)
       {
           if(isvowel(s[j]))
           {
               count+=1;
           }
           j+=1;
       }
       max_length=Math.max(max_length,count);
       i+=1;

   }
   return max_length;
   
};



/**
 * this below problem can be solved by sliding window problem---O(n)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var isvowel=function(chr)
{
    if(chr=='a'||chr=='e'||chr=='i'||chr=='o'||chr=='u')
    {
        return true;
    }
    else
    {
        return false;
    }

};



var maxVowels = function(s, k) {
    var l=0;
    var r=0;
    var max_length=Math.log(0);
    var count=0;
    while(r<s.length)
    {
        if((r-l+1)>k)
        {
            if(isvowel(s[l]))
            {
                count=count-1;
            }
            l=l+1;
        }
       
        if(isvowel(s[r]))
        {
            count+=1;
        }
        max_length=Math.max(max_length,count);
        r+=1;
        
    }

    return max_length;


    
};