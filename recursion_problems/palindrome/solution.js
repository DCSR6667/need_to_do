const reverse_a_number1=require("../reverse_a_number/solution");
const palindrome=(num)=>
    {
        if(num==reverse_a_number1(num))
            {
                return true;
            }
        else{
            return false;
        }

    };


console.log(palindrome(12321));