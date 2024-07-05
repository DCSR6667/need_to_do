// this problem can be solved by binary search pattern--O(logn)
// but instead of dividing do multiplying

const binary_search=(arr,target,low,high)=>
    {
        while(low<=high)
            {
             
                var mid=Math.floor((low+high)/2);
                
                if(target==arr[mid])
                    {
                        return mid;
                    }
                else if(target>arr[mid])
                    {
                        low=mid+1;

                    }
                else{
                    high=mid-1;

                }
            }

            return Infinity;
    }


const search_in_infinity=(arr,target)=>
    {
        var low=0;
        var high=1;
        while(target>arr[high])
            {
                
                var temp=high;
                high=high+(high-low+1)*2;
                low=temp+1;
                

            }
            return binary_search(arr,target,low,high);

    };

var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(search_in_infinity(arr,20)); 