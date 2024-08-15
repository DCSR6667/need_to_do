const is_power_of_2=(num)=>{
    var count=0;
    while(num>0)
        {
            if(count>=2)
                {
                    return false;

                }
            last=num&1;
            if(last==1)
                {
                    count+=1;

                }
            num=num>>1;
           
        }
    if(count==1)
        {
            return true;

        }
        else{
            return false;

        }



}


const is_power_of_2_second=(num)=>
    {
        return (num&(num-1))==0;

    };


console.log(is_power_of_2_second(8));