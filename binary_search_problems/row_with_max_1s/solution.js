/**
 * time complexity---O(no_of_rows_which_has_atleast_1s*log(no_of_cols))
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
class Solution {
    
    search(arr,size)
    {
        var ans=size;
        var low=0,high=size-1;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(arr[mid]==1)
            {
                ans=mid;
                high=mid-1;
                
            }
            else
            {
                low=mid+1;
            }
        }
        
        return size-ans;
        
    }

    rowWithMax1s(arr) {
        // code here
        var row_size=arr.length;
        var col_size=arr[0].length;
        var i=0,maxcount=0,index=-1;
        while(i<row_size)
        {
            if(arr[i][col_size-1]!=0)
            {
                 var count=this.search(arr[i],arr[i].length);
                  if(count>maxcount)
                    {
                        maxcount=count;
                        index=i;
                    }
                
            }
           
           
            i+=1
            
        }
        
        return index;
        
        
    }
}



/**
 * time complexity---O(no_of_rows*log(no_of_cols))
 * space complexity--O(1)
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
class Solution {
    
    search(arr,size)
    {
        var ans=size;
        var low=0,high=size-1;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(arr[mid]==1)
            {
                ans=mid;
                high=mid-1;
                
            }
            else
            {
                low=mid+1;
            }
        }
        
        return size-ans;
        
    }

    rowWithMax1s(arr) {
        // code here
        var row_size=arr.length;
        var col_size=arr[0].length;
        var i=0,maxcount=0,index=-1;
        while(i<row_size)
        {
            var count=this.search(arr[i],arr[i].length);
            if(count>maxcount)
            {
                maxcount=count;
                index=i;
            }
            i+=1
            
        }
        
        return index;
        
        
    }
}