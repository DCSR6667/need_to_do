// this problem can be solved by binary search---O(logn)
// ceil of a number is smallest element that is greater than or equal to target
const ceiling=(arr,target)=>
    {
        var low,high;
        low=0;
        high=arr.length-1;
        while(low<=high)
            {
                var mid=Math.floor((low+high)/2);
                if(arr[mid]==target)
                    {
                        return arr[mid];
                    }
                else if(target<arr[mid])
                    {
                        high=mid-1;
                    }
                else{
                    low=mid+1;
                }
            }
        return arr[low];

    };


// linear search----O(n)      
const ceiling1=(arr,target)=>
    {
        var i=0;
        while(i<arr.length)
            {
                if(target<=arr[i])
                    {
                        return arr[i];
                    }
                else{
                    i+=1;
                }
            }
        return Infinity;
    }

var arr=[1,2,3,4,5,10,24,26];
console.log(ceiling1(arr,27));