// this problem can be solved by bianry search pattern
// time complexity-----O(log(max_ele-min_ele+1)*(rows*log(cols)))

class Solution {
    // Function to find median of the matrix.
    
    helper(mat,i,ele)
    {
        var low=0,res=-1;
        var high=mat[i].length-1;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(mat[i][mid]<=ele)
            {
                res=mid;
                low=mid+1;
                
            }
            else
            {
                high=mid-1;
            }
        }
        return (res+1);
        
    }
    
    get_less_than_equal_to_mid(mat,ele)
    {
        var i=0;
        var sum=0;
        while(i<mat.length)
        {
            sum=sum+this.helper(mat,i,ele);
            i+=1;
        }
        return sum;
        
        
    }
    
    get_min(mat,col)
    {
        var row=0;
        var min=Infinity;
        while(row<mat.length)
        {
            if(mat[row][col]<min)
            {
                min=mat[row][col];
                
            }
            row+=1;
        }
        return min;
        
    }
    
    get_max(mat,col)
    {
        var row=0;
        var max=-Infinity;
        while(row<mat.length)
        {
            if(mat[row][col]>max)
            {
                max=mat[row][col];
               
            }
             row+=1;
            
        }
        return max;
        
    }
    
   
    
    median(mat) {
        // your code here
        var m=mat.length;
        var n=mat[0].length
        var low=this.get_min(mat,0);
        var high=this.get_max(mat,n-1)
        var half=Math.floor((m*n)/2);
        var count,ans=-1;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            count=this.get_less_than_equal_to_mid(mat,mid);
          
            
          
            
            if(count<=half)
            {
                low=mid+1;
            }
            else
            {
                ans=mid;
                high=mid-1;
            }
            
        }
        return ans;
    }
}