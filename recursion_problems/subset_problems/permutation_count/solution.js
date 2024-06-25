const permutation_count=(s,res,count)=>
    {
       
        if(s.length==0)
            {
                
                count=count+1;
                return count;
            }

        var i=0;
        var size=res.length+1;
       
        while(i<size)
            {
                var start=res.slice(0,i);
                var mid=s[0];
                var end=res.slice(i);

                count=permutation_count(s.slice(1),start+mid+end,count);
                i+=1;

            }
        return count;

    };



const permutation_count1=(s,res)=>
    {
        var count=0
        if(s.length==0)
            {
                
                return 1;
            }

        var i=0;
        var size=res.length+1;
       
        while(i<size)
            {
                var start=res.slice(0,i);
                var mid=s[0];
                var end=res.slice(i);

                count=count+permutation_count1(s.slice(1),start+mid+end);
                i+=1;

            }
        return count;

    };

console.log(permutation_count("abc","",0));