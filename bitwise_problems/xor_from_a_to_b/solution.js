// time complexity---O(1)
const xor=(num)=>
    {
        if(num%4==0)
            {
                return num;
            }
        else if(num%4==1)
            {
                return 1;
            }
        else if(num%4==2)
            {
                return num+1;
            }
        else if(num%4==3){
            return 0
        }

    };



const xor_from_a_to_b=(a,b)=>
    {
        return xor(b)^xor(a-1);

    };


console.log(xor_from_a_to_b(3,9));