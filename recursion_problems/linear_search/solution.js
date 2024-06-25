const find=(nums,i,target)=>
    {
        if(i==nums.length)
            {
                return false;
            }
        if(arr[i]==target)
            {
                return true;

            }
        return find(nums,i+1,target);

    };


const findIndex=(nums,i,target)=>
    {
        if(i==nums.length)
            {
                return -1;
            }
        if(arr[i]==target)
            {
                return i;

            }
        return findIndex(nums,i+1,target);

    };



const findIndexLast=(nums,i,target)=>
    {
        if(i==-1)
            {
                return -1;
            }
        if(arr[i]==target)
            {
                return i;

            }
        return findIndex(nums,i-1,target);

    };



const findAllIndex=(arr,i,target)=>
    {
        var res=[];
        if(i==arr.length)
            {
                return res;
            }
        if(arr[i]==target)
            {
                res.push(i);
            }
           var resfrombelow=findAllIndex(arr,i+1,target);
           return res.concat(resfrombelow);
        
    };


    const findAllIndex1=(arr,i,target,res)=>
        {
           
            if(i==arr.length)
                {
                    return res;
                }
            if(arr[i]==target)
                {
                    res.push(i);
                }
               return findAllIndex1(arr,i+1,target,res);
               
    
        };



var arr=[4,2,4,3,4];
console.log(findAllIndex1(arr,0,4,[]));