const no_of_digits=(num,base)=>
    {
        return Math.floor((Math.log(num))/Math.log(base))+1;
        

    };

console.log(no_of_digits(7,2));