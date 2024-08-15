/**
 * time complexity----O(log(m)+log(n))
 * idea is flatten the array and perform the binary search
 * 1D index to 2D index conversion has to done
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rows=matrix.length;
    var cols=matrix[0].length;
    var low=0,row,col;
    var high=rows*cols-1;
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        row=Math.floor(mid/cols);
        col=mid%cols;
        if(matrix[row][col]==target)
        {
            return true;
        }
        else if(matrix[row][col]>target)
        {
            high=mid-1;
        }
        else
        {
            low=mid+1;
        }
    }

    return false;
    
};





/**
 * this problem can be solved by binary search problem---O(logm+logn)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const binary_search=(matrix,row,col_start,col_end,target)=>
    {
       
       while(col_start<=col_end)
       {
           var mid=Math.floor((col_start+col_end)/2);
           if(target==matrix[row][mid])
           {
               return true;
           }
           else if(target>matrix[row][mid])
           {
               col_start=mid+1;
           }
           else
           {
               col_end=mid-1;
           }
   
       }
       return false;
       
       
   
    };
   
   
   var searchMatrix = function(matrix, target) {
       var row_start,row_end,col_start,col_end,row_mid,col_mid;
       row_start=0;
       col_start=0
       row_end=matrix.length-1;
       col_end=matrix[0].length-1;
       row_mid=Math.floor((row_start+row_end)/2);
       col_mid=Math.floor((col_start+col_end)/2);
       while((row_end-row_start+1)>2)
       {
           row_mid=Math.floor((row_start+row_end)/2);
           col_mid=Math.floor((col_start+col_end)/2);
           if(matrix[row_mid][col_mid]==target)
           {
               return true;
           }
           else if(target>matrix[row_mid][col_mid])
           {
               row_start=row_mid;
           }
           else
           {
               row_end=row_mid;
           }
   
       }
   
      console.log(row_start,row_end,col_start,col_end,row_mid,col_mid);
       
   
       if(matrix[row_end][col_mid]==target)
       {
           return true;
       }
       else if(target==matrix[row_start][col_mid])
       {
           return true;
       }
       else if(target>matrix[row_end][col_mid])
       {
           console.log("1");
           return binary_search(matrix,row_end,col_mid+1,col_end,target);
       }
       else if(target>matrix[row_start][col_end] && target<matrix[row_end][col_mid])
       {
             console.log("2");
           return binary_search(matrix,row_end,0,col_mid-1,target);
       }
       else if(target>matrix[row_start][col_mid])
       {
             console.log("3");
           return binary_search(matrix,row_start,col_mid+1,col_end,target);
       }
       else
       {
             console.log("4");
           return binary_search(matrix,row_start,0,col_mid-1,target);
       }
       
   };