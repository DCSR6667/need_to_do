const subsets=(arr,i,res,ressum,sum)=>
    {
        if(ressum==sum)
            {
                console.log(res);
                return;
            }

        if(i>=arr.length)
            {
                return;
            }
        if(ressum>sum)
            {
                return;
            }
        

        res.push(arr[i]);
        subsets(arr,i+1,res,ressum+arr[i],sum);
        res.pop();
        subsets(arr,i+1,res,ressum,sum);

    };


arr=[1,2,1];
subsets(arr,0,[],0,2);



// // i want only one subset not all subsets  that has sum k
// const subsets=(arr,i,res,ressum,sum)=>
//     {
//         if(ressum==sum)
//             {
//                 console.log(res);
//                 return true;
//             }
            
//         if(i>=arr.length)
//             {
//                 return false;
//             }
//         if(ressum>sum)
//             {
//                 return false;
//             }
        

//         res.push(arr[i]);
//         var x=subsets(arr,i+1,res,ressum+arr[i],sum);
//         if(x==true)
//             {
//                 return true;
//             }
//         res.pop();
//         return subsets(arr,i+1,res,ressum,sum);

//     };

// arr=[1,2,1];
// subsets(arr,0,[],0,2);