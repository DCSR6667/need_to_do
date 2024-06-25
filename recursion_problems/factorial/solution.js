const factorial=(n)=>
{
    if(n==1)
        {
            return 1;
        }
    var s=n;
    var f=factorial(n-1);
    return s*f;

};

console.log(factorial(3));
