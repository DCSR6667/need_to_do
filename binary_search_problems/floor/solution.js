// this problem can be solved by binary search---O(logn)
// floor of a number is greatest element that is smaller than or equal to target


const floor=(arr,target)=>
    {
        var l=0;
        var h=arr.length-1;
        while(l<=h)
            {
                var mid=Math.floor((l+h)/2);
                if(arr[mid]==target)
                    {
                        return arr[mid];
                    }
                else if(target<arr[mid])
                    {
                        h=mid-1;

                    }
                else{
                    l=mid+1;

                }
            }

        return arr[h];

    };


const floor1=(arr,target)=>
    {
        var i=0
        var max=Math.log(0);
        while(i<arr.length)
            {
                if(target==arr[i])
                    {
                        return arr[i];
                    }
                else if(target>arr[i])
                {
                    max=Math.max(max,arr[i]);
                    i+=1;
                }
                else{
                    return max;
                }
            }
        return max;

    };

var arr=[10,16,18,22,32];
console.log(floor1(arr,10));