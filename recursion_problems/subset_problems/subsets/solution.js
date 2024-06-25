const subsets=(s,res,combine_res)=>
    {
        if(s.length==0)
            {
                combine_res.push(res);
                return combine_res;
            }
        subsets(s.slice(1),res+s[0],combine_res);
        subsets(s.slice(1),res,combine_res);
        return combine_res;

    };


const subsets1=(s,res)=>
    {
        var combine_res=[];
        if(s.length==0)
            {
                combine_res.push(res);
                return combine_res;
            }
        var f1=subsets1(s.slice(1),res+s[0]);
        var f2=subsets1(s.slice(1),res);
        return combine_res.concat(f1,f2);

    };
    

console.log(subsets1("abc",""));