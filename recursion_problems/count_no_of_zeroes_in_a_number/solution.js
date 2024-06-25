const count_zeroes1=(num,count)=>
{
    if(num==0 && count==0)
        {
            return 1;
        }
    if(num==0)
        {
            return count;
        }


    var d=num%10;
    if(d==0)
        {
            count=count+1;
        }
    return count_zeroes1(Math.floor(num/10),count);

};


const count_zeroes2=(num)=>
    {
        if(num==0)
            {
                return 0
            }
        var count=0;
        var d=num%10;
        if(d==0)
            {
                count=1;
            }
        var f=count_zeroes2(Math.floor(num/10));
        return count+f;
    };


console.log(count_zeroes2(12003040));