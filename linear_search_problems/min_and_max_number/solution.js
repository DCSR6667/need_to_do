const min_max=(arr)=>
    {
        var min=Infinity;
        var max=Math.log(0);
        i=0;
        var res=[];
        while(i<arr.length)
            {
                if(arr[i]<min)
                    {
                        min=arr[i];
                    }
                if(arr[i]>max)
                    {
                        max=arr[i];
                    }
                i+=1;
            }


            res.push(min);
            res.push(max);

            return res;


        
        

    };


console.log(min_max([1,3,2,67,23,7,4,9,7,0]));