/**
 * time complexity----O(max(len(a),len(b)))
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const reverse=(c)=>
    {
       return c.split("").reverse().join("");
   
    };
   
   
   
   const adding=(a,b,carry)=>
   {
       if(a=="0" && b=="0" && carry=="0")
       {
           return ["0","0"];
       }
       else if(a=="1" && b=="0" && carry=="0")
       {
           return ["1","0"];
       }
       else if(a=="0" && b=="1" && carry=="0")
       {
           return ["1","0"];
       }
       else if(a=="0" && b=="0" && carry=="1")
       {
           return ["1","0"];
       }
       else if(a=="1" && b=="1" && carry=="0")
       {
           return ["0","1"];
       }
       else if(a=="1" && b=="0" && carry=="1")
       {
           return ["0","1"];
       }
       else if(a=="0" && b=="1" && carry=="1")
       {
           return ["0","1"];
       }
       else if(a=="1" && b=="1" && carry=="1")
       {
           return ["1","1"];
       }
       
       
   
   };
   
   
   var addBinary = function(a, b) {
       var c="";
       var carry="0";
       var i=a.length-1,j=b.length-1;
       while(i>=0 && j>=0)
       {
           var [sum,carry]=adding(a[i],b[j],carry);
           c=c+sum;
           i-=1;
           j-=1;
   
       }
   
       while(i>=0)
       {
           var [sum,carry]=adding(a[i],"0",carry);
           c=c+sum;
           i-=1;
   
       }
   
       while(j>=0)
       {
            var [sum,carry]=adding("0",b[j],carry);
           c=c+sum;
           j-=1;
   
       }
       if(carry!="0")
       {
           c=c+carry;
       }
       return reverse(c);
   }
   
   
   
   
       
   