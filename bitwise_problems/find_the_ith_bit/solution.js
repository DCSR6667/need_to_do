const find_ith_bit=(num,i)=>
    {
        var rs=num>>(i-1);
        return rs&1;


    };

console.log(find_ith_bit(182,7));