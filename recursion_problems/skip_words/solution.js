
const skipword=(s,res,word)=>
    {
        if(s.length==0)
            {
                return res;
            }
        if(!(s.startsWith(word)))
            {
                res=res+s[0];
                return skipword(s.slice(1),res,word);
            }
        else{
            return skipword(s.slice(word.length),res,word);
        }

    };



    const skipword1=(s,word)=>
        {
            var res="";
            if(s.length==0)
                {
                    return res;
                }
            if(!(s.startsWith(word)))
                {
                    res=res+s[0];
                    var resfrombelow=skipword1(s.slice(1),word);
                }
            else{
                var resfrombelow=skipword1(s.slice(word.length),word);
            }

            return res+resfrombelow;
    
        };





console.log(skipword1("applechandraapple","","apple"));