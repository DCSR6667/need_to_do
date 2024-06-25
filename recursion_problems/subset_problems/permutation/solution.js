const permutation=(s,res,combine_res)=>
    {
        if(s.length==0)
            {
                combine_res.push(res);
                return;
            }

        var i=0;
        var size=res.length+1;
        while(i<size)
            {
                var start=res.slice(0,i);
                var mid=s[0];
                var end=res.slice(i);

                permutation(s.slice(1),start+mid+end,combine_res);
                i+=1;

            }
        return combine_res;

    };


const permutation1=(s,res)=>
    {
        var combine_res=[];
        if(s.length==0)
            {
                combine_res.push(res);
                return combine_res;
            }

        var i=0;
        var size=res.length+1;
        while(i<size)
            {
                var start=res.slice(0,i);
                var mid=s[0];
                var end=res.slice(i);

               var f1=permutation1(s.slice(1),start+mid+end);
               combine_res = combine_res.concat(f1);
                i+=1;

            }
        return combine_res;

    };

console.log(permutation1("abc",""));