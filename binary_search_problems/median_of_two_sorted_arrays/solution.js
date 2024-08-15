/**
 * in this question we will concentrate 
 * 1... how many elements we have to take on 
        * leftside and right side
        *  res=  1, 2, 3, 4, 6, 7, 8, 9, 10
            1, 2, 3, 4, 6,| 7, 8, 9, 10
        * 
        *  we will figure it out how many elements can be taken
        * from array1 and array2 on left side
        * from array1 and array2 on right side
        * based on this check
        **** if(l1<=r2 && l2<=r1)
         {
                if this is true then  
                then left part is smaller than right part
                then we can find out answer
         }
          arr1  2,3,6 |7,9
         arr2   1,4 | 8,10   
        * 
        
       

       

        

        * 

 * 
 *2...always perform binary search on low sized array so that
 we can reduce time complexity 
 *
 * 1,2,3,|4,5,6
 * 1,2|3
 * 
 * 
 * time complexity---O(min(logm,logn))
 * space complexity--O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var size1=nums1.length;
    var size2=nums2.length;
    var total_size=size1+size2;
    var low=0,high=size1;
    if(size1>size2)
    {
        return findMedianSortedArrays(nums2,nums1);
    }
    var l1,l2,r1,r2;
    var left_elements=Math.floor((size1+size2+1)/2);
    
    while(low<=high)
    {
        var mid1=Math.floor((low+high)/2);
        var mid2=left_elements-mid1;
        
        if(mid1>=size1){ r1=Infinity;}else{r1=nums1[mid1];}
        if(mid2>=size2){ r2=Infinity;}else{r2=nums2[mid2];}
        if(mid1-1<0){ l1=Math.log(0);}else{l1=nums1[mid1-1];}
        if(mid2-1<0){ l2=Math.log(0);}else{l2=nums2[mid2-1];}

        
        if(l1<=r2 && l2<=r1)
        {
           
            if((total_size&1)==0)
            {
            
               
                return (Math.max(l1,l2)+Math.min(r1,r2))/2;

            }
            else
            {
                return Math.max(l1,l2);

            }

        }

        if(l1>r2)
        {
            high=mid1-1;
        }
        else
        {
            low=mid1+1;
        }


    }
    
    
};






/**
 * time complexity---O(max(size1,size2))
 * space complexity--O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var i=0,j=0,count=-1;

    var len=(nums1.length+nums2.length)

    var mid_index=Math.floor((len-1)/2);
    var isodd,sum=0;
    if(len%2!=0)
    {
        isodd=true;
    }
    else
    {
        isodd=false;
    }
    while(i<nums1.length && j<nums2.length)
    {
        if(nums1[i]<nums2[j])
        {
            count+=1;
            if(isodd)
            {
                if(count==mid_index)
                {
                    return nums1[i];
                }

            }
            else
            {
                if(count==mid_index)
                {
                    sum=sum+nums1[i];
                }
                if(count==mid_index+1)
                {
                    sum=sum+nums1[i];
                    return sum/2;
                }

            }
          
            i+=1;
        }
        else
        {
            count+=1;
            if(isodd)
            {
                if(count==mid_index)
                {
                    return nums2[j];
                }

            }
            else
            {
                if(count==mid_index)
                {
                    sum=sum+nums2[j];
                }
                if(count==mid_index+1)
                {
                    sum=sum+nums2[j];
                    return sum/2;
                }

            }
            
            j+=1;
        }
    }

    while(i<nums1.length)
    {
            count+=1;
            if(isodd)
            {
                if(count==mid_index)
                {
                    return nums1[i];
                }

            }
            else
            {
                if(count==mid_index)
                {
                    sum=sum+nums1[i];
                }
                if(count==mid_index+1)
                {
                    sum=sum+nums1[i];
                    return sum/2;
                }

            }
        
        i+=1;
    }

    while(j<nums2.length)
    {
            count+=1;
            if(isodd)
            {
                if(count==mid_index)
                {
                    
                    return nums2[j];
                }

            }
            else
            {
                console.log("hi");
                if(count==mid_index)
                {
                    sum=sum+nums2[j];
                }
                if(count==mid_index+1)
                {
                    sum=sum+nums2[j];
                    return sum/2;
                }

            }
        
        j+=1;
    }

    
};



/**
 * time complexity---O(m+n)
 * space complexity--O(m+n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var res=[];
    var i=0,j=0;
    while(i<nums1.length && j<nums2.length)
    {
        if(nums1[i]<nums2[j])
        {
            res.push(nums1[i]);
            i+=1;
        }
        else
        {
            res.push(nums2[j]);
            j+=1;
        }
    }

    while(i<nums1.length)
    {
        res.push(nums1[i]);
        i+=1;
    }

    while(j<nums2.length)
    {
        res.push(nums2[j]);
        j+=1;
    }

    var size=res.length;
    var low=0;
    var mid=Math.floor((low+size-1)/2);
    if(size%2==0)
    {
        return (res[mid]+res[mid+1])/2;
    }
    else
    {
        return res[mid];
    }
    
};