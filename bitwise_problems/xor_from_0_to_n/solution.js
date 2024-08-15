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
        else{
            return 0
        }

    };

console.log(xor(3));