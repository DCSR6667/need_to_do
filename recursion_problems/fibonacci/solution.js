const fibo=(num)=>
    {
        if(num<=1)
            {
                return num;
            }
        var res1=fibo(num-1);
        var res2=fibo(num-2);
        return res1+res2;
    }

console.log(fibo(6));