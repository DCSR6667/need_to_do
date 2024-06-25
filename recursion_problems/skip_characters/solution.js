const skipchar=(s,res,char)=>
    {
        
        if(s.length==0)
            {
                return res;

            }
        
        
        if(s[0]!=char)
            {
                res=res+s[0];

            }
       return skipchar(s.slice(1),res,char);
        


    };






const skipchar1=(s,char)=>
    {
        var res="";
        if(s.length==0)
            {
                return res;

            }
        
        
        if(s[0]!=skip)
            {
                res=res+s[0];

            }
        var resfrombelow=skipchar1(s.slice(1),char);
        return res+resfrombelow;


    };



console.log(skipchar("dgkndsaaajga","","a"));

