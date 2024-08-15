const get_position_of_1=(num)=>
    {
        var count=0;
        while(true)
            {
                var last=num&1;
                count+=1;
                if(last==1)
                    {
                        return count;
                    }
                num=num>>1;


            }
        

    };

const rmsbits=(num)=>
    {
        var pos=get_position_of_1(num);
        var res=(1<<(pos-1));
        return res.toString(2);

    };


console.log(rmsbits(-120));