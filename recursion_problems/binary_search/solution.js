const binary_search=(arr,l,h,target)=>
    {
        if(l>h)
            {
                return -1;
            }
        var mid=Math.floor((l+h)/2);
        if(arr[mid]==target)
            {
                return mid;
            }
        else if(arr[mid<target])
            {
                return binary_search(arr,l,h-1,target);

            }
            else{
                return binary_search(arr,l+1,h,target);
            }

    };



var arr=[1,2,3,4,5];
console.log(binary_search(arr,0,arr.length-1,0));