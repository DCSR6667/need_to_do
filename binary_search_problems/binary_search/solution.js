const binary_search=(arr,target)=>
    {
        var low=0;
        var high=arr.length-1;
        var mid;
        while(low<=high)
            {
                mid=Math.floor((low+high)/2);
                if(arr[mid]==target)
                    {
                        return mid;
                    }
                else if(target<arr[mid])
                    {
                        high=high-1;
                    }
                else{
                    low=low+1;
                }

            }
        return Infinity;

    };

const recursive_search=(arr,low,high,target)=>
    {

        if(low>high)
            {
                return Infinity;
            }
        var mid=Math.floor((low+high)/2);

        if(arr[mid]==target)
            {
                return mid;

            }
        else if(target>arr[mid])
            {
                return recursive_search(arr,mid+1,high,target);
            }
        else{
            return recursive_search(arr,low,mid-1,target);
        }

    };

    var arr=[1,2,3,4,5];
console.log(recursive_search(arr,0,arr.length-1,6));