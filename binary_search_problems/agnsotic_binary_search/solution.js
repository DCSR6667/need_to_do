const agnostic_search=(arr,target)=>
    {
        var low,high,mid,asc;
        low=0;
        high=arr.length-1;
        if(arr[0]<arr[1])
            {
                asc=true;
            }
        else{
            asc=false;
        }

        while(low<=high)
            {
                var mid=Math.floor((low+high)/2);
                if(arr[mid]==target)
                    {
                        return mid;
                    }
                else if(target<arr[mid])
                    {
                        if(asc)
                            {
                                high=mid-1;

                            }
                        else{
                            low=mid+1;

                        }

                    }
                else{
                    if(asc)
                        {
                            low=mid+1;


                        }
                    else{
                        high=mid-1;
                        
                    }

                }
            }

        return Infinity;

    };



var arr=[5,4,3,2,1];
console.log(agnostic_search(arr,5));