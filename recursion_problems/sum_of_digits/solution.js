const sum_of_digits=(number)=>
{
    if(number==0)
        {
            return 0;
        }
    var d=number%10;
    var rem=sum_of_digits(Math.floor(number/10));
    return d+rem;

};

console.log((sum_of_digits(1234)));