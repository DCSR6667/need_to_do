const subsets_ascii=(s,res,combine_res)=>
    {
        if(s.length==0)
            {
                combine_res.push(res);
                return combine_res;
            }

        subsets_ascii(s.slice(1),res+s[0],combine_res);
        subsets_ascii(s.slice(1),res,combine_res);
        subsets_ascii(s.slice(1),res+(s[0].charCodeAt(0)),combine_res);
        return combine_res;

    };


const subsets_ascii1=(s,res)=>
    {
        var combine_res=[];
        if(s.length==0)
            {
                combine_res.push(res);
                return combine_res;
            }

        var f1=subsets_ascii1(s.slice(1),res+s[0]);
        var f2=subsets_ascii1(s.slice(1),res);
        var f3=subsets_ascii1(s.slice(1),res+(s[0].charCodeAt(0)));
        return combine_res.concat(f1,f2,f3);

    };



console.log(subsets_ascii1("abc",""));
