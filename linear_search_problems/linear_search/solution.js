const linear_search=(arr,target)=>
    {
        if(arr.length==0)
            {
                return Infinity;
            }
        i=0;
        while(i<arr.length)
            {
                if(arr[i]==target)
                    {
                        return i;
                    }
                    i+=1;
            }
        return Infinity;

    };


    var arr=[1,2,5,3,7,9];
    console.log(linear_search(arr,10));
