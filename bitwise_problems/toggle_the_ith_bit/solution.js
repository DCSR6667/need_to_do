const toggle=(num,i)=>
    {
        var mask=(1<<(i-1));
        return num^mask;
    }

console.log(toggle(6,1));