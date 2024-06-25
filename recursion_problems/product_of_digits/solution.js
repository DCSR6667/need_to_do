const product_of_digits=(num)=>
{
    if(num==0)
        {
            return 1;
        }
    var d=num%10;
    var rem=product_of_digits(Math.floor(num/10));
    return d*rem;

};


console.log(product_of_digits(12345));