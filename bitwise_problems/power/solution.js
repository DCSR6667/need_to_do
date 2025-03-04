// time complexity ---O(log(num))
const power=(base,num)=>
    {
        var ans=1;
        var last;
        while(num>0)
            {
                last=num&1;
                if(last==1)
                    {
                        ans=ans*(last*base);

                    }
                
                base=base*base;
                num=num>>1;
            }
        return ans;

    };

console.log(power(2,3));

