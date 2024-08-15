// how many ways we can make sum of num with these [1,2,3,4,5,6] numbers
const dice=(num,res,combine_res)=>
    {

        if(num==0)
            {
               
                combine_res.push(res);
                return;

            }

        var i=1;
        while(i<=6)
            {
                if(i<=num)
                    {
                        dice(num-i,res+i,combine_res);
                    }
                i+=1;
            }

        return combine_res;

    };



const dice1=(num,res)=>
    {
        var combine_res=[];

        if(num==0)
            {
                
                combine_res.push(res);
                return combine_res;

            }

        var i=1;
        while(i<=6)
            {
                if(i<=num)
                    {
                        combine_res=combine_res.concat(dice1(num-i,res+i,combine_res));
                    }
                i+=1;
            }

        return combine_res;

    };


console.log(dice1(8,"",[]));