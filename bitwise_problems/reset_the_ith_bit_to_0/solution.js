const reset=(num,i)=>
    {
        var mask=~(1<<(i-1));
        var res=num&mask;
        return res.toString(2);
    }

console.log(reset(182,2));