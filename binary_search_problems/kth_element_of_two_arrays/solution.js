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
        
 *2...always perform binary search on low sized array so that
 we can reduce time complexity 
 *
 * 1,2,3,|4,5,6
 * 1,2|3
 * 
 * 
 * time complexity---O(min(logm,logn))
 * space complexity--O(1)*/

class Solution {
    kthElement(nums1,nums2,size1,size2,k){ 
        //code here
       
        var total_size=size1+size2;
        var low=Math.max(k-size2,0),high=Math.min(size1,k);
        if(size1>size2)
        {
            return this.kthElement(nums2,nums1,size2,size1,k);
        }
        var l1,l2,r1,r2;
        var left_elements=k;
        
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
               
                return Math.max(l1,l2);
    
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
    }
        
        
    }




// time complexity--O(k)
// space complexity---O(1)
class Solution {
    kthElement(A,B,n,m,k){ 
        //code here
        var i=0,j=0;
        var count=0,inserted_ele;
        while(i<n && j<m)
        {
            if(A[i]>B[j])
            {
                count+=1;
                inserted_ele=B[j];
                
                j+=1;
                
            }
            else
            {
                count+=1;
                inserted_ele=A[i];
                i+=1;
            }
            
            if(count==k)
            {
                return inserted_ele;
            }
        }
        
        while(i<n)
        {
            count+=1;
            inserted_ele=A[i];
            if(count==k)
            {
                return inserted_ele;
            }
            i+=1;
        }
        
        while(j<m)
        {
            count+=1;
            inserted_ele=B[j];
            if(count==k)
            {
                return inserted_ele;
            }
            
            j+=1;
        }
        
       
    }
}


// time complexity---O(n+m)
// space complexity---O(n+m)
class Solution {
    kthElement(A,B,n,m,k){ 
        //code here
        var i=0,j=0;
        var res=[];
        while(i<n && j<m)
        {
            if(A[i]>B[j])
            {
                res.push(B[j]);
                j+=1;
                
            }
            else
            {
                res.push(A[i]);
                i+=1;
            }
        }
        
        while(i<n)
        {
            res.push(A[i]);
            i+=1;
        }
        
        while(j<m)
        {
            res.push(res[j]);
            j+=1;
        }
        
       return res[k-1];
    }
}