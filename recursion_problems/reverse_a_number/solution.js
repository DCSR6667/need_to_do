const reverse_a_number=(num,s)=>
    {
        if(num==0)
            {
                return s;
            }
        var d=num%10;
        s=s+d;
        return reverse_a_number(Math.floor(num/10),s);


    };





const number_of_digits=(num)=>
{
    if(num==0)
        {
            return 0;
        }
    var count=1;
    var f=number_of_digits(Math.floor(num/10));
    return count+f;
}

const helper=(num,digits)=>
    {
        if(num==0)
            {
                return 0;
            }
        var rem=(num%10)*Math.pow(10,digits-1);
        var f=helper(Math.floor(num/10),digits-1);
        return rem+f;

    };




const reverse_a_number1=(num)=>
    {
         return helper(num,number_of_digits(num));
        

    };

n=12345
console.log(reverse_a_number1(n));

module.exports=reverse_a_number1;
