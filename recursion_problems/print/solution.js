const print_nto1=(n)=>
{
    if(n==0)
        {
            return;
        }
    console.log(n);
    print_nto1(n-1);

};


const print_1ton=(n)=>
    {
        if(n==0)
            {
                return;
            }
        
        print_1ton(n-1);
        console.log(n);
    
    
    };

const print_both=(n)=>
{
    if(n==0)
        {
            return;
        }
    console.log(n);
    print_both(n-1);
    console.log(n);

};


print_both(5);