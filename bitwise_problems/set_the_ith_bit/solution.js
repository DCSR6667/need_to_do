const set=(num,i)=>
    {
        var mask=(1<<(i-1));
        var res=(num|mask)
        return res.toString(2);

    };

console.log(set(182,7));