// time complexity-----O(log(max_ele-min_ele+1)*(rows*log(cols)))
class Solution
{
    //Function to find median of the matrix.
    get_min(matrix,rows,cmol)
    {
        var i=0;
        var mini=Infinity;
        while(i<rows)
        {
            if(matrix[i][col]<mini)
            {
                mini=matrix[i][col];
            }
            i+=1;
            
            
        }
        return mini;
        
    }
    
    get_max(matrix,rows,col)
    {
        var i=0;
        var maxi=-Infinity;
        while(i<rows)
        {
            if(matrix[i][col]>maxi)
            {
                maxi=matrix[i][col];
            }
            i+=1;
        }
        return maxi;
        
    }
    
    count_target(matrix,row,cols,target)
    {
        var low=0;
        var high=cols-1;
        var ans=-1;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(matrix[row][mid]<=target)
            {
                ans=mid;
                low=mid+1;
            }
            else
            {
                high=mid-1;
            }
        }
        return (ans+1);
    }
    
    
    helper(matrix,rows,cols,target)
    {
        var i=0;
        var count=0;
        while(i<rows)
        {
            
                
                var res=this.count_target(matrix,i,cols,target);
                count=count+res;
                
            
            i+=1;
        }
       
        
        return count;
    }
    
    
    median(matrix, R, C)
    {
        //your code here
        var low=this.get_min(matrix,R,0);
        var high=this.get_max(matrix,R,C-1);
        var count;
        var half=Math.floor((R*C)/2);
        var ans;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            count=this.helper(matrix,R,C,mid);
            if(count>half)
            {
                ans=mid;
                high=mid-1;
            }
            else
            {
                low=mid+1;
            }
        }
        return ans;
    }
}



// time complexity----O(m*n+(m*n)log(m*n))
class Solution
{
    //Function to find median of the matrix.
    median(matrix, R, C)
    {
        //your code here
        var res=[];
        var i=0;
        while(i<R)
        {
            var j=0;
            while(j<C)
            {
                res.push(matrix[i][j]);
                j+=1;
            }
            i+=1;
        }
        
        res.sort((a, b) => a - b);
        return res[Math.floor((R*C)/2)];
    }
}