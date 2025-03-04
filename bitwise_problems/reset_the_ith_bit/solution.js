const reset=(num,i)=>
    {
        var mask=~(1<<(i-1));
        var res=num&mask;
        return res.toString(2);
    }


const reset1=(num,i)=>
{
    var res=num^(1<<(i-1))
    return res.toString(2);

};

console.log(reset(182,3));
console.log(reset1(182,3));