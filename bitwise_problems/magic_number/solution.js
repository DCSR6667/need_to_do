const magic_number=(num)=>
    {
        var base=5;
        var last;
        var res=0;
        while(num>0)
            {
                last=num&1;
                res=res+(last*base);
                base=base*5;
                num=num>>1;


            }
            return res;
    };

    console.log(magic_number(3))