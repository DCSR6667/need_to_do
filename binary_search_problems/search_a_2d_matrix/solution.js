/**
 * time complexity----O(log(m)+log(n))
 * idea is flatten the array and perform the binary search
 * convert mid_index to row_index,col_index
 /**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    var low=0;
    var high=matrix.length*matrix[0].length-1;
    var mid,row,col;
    var n=matrix[0].length;
    while(low<=high)
    {
        mid=Math.floor((low+high)/2);
        row=Math.floor(mid/n);
        col=mid%n;
        if(matrix[row][col]==target)
        {
            return true;
        }
        else if(target>matrix[row][col])
        {
            low=mid+1;
        }
        else
        {
            high=mid-1;
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
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var binary_search=(matrix,row,start,end,target)=>
    {
    
        
        while(start<=end)
        {
            var mid=Math.floor((start+end)/2);
            if(matrix[row][mid]==target)
            {
                return true;
            }
            else if(target>matrix[row][mid])
            {
                start=mid+1;
            }
            else
            {
                end=mid-1;
            }
        }
        return false;
    
    };
    
    
    var searchMatrix = function(matrix, target) {
    
        var low=0;
        var high=matrix.length-1;
    
        if(high-low+1==1)
        {
            return binary_search(matrix,low,0,matrix[low].length-1,target);
        }
        var col_mid=Math.floor((matrix[0].length-1)/2);
        while(high-low>1)
        {
            var mid=Math.floor((low+high)/2);
            if(matrix[mid][col_mid]==target)
            {
                return true;
            }
            else if(target>matrix[mid][col_mid])
            {
                low=mid;
    
            }
            else
            {
                high=mid;
    
            }
    
        }
    
    
        if(matrix[low][col_mid]==target)
        {
            return true;
        }
        else if(matrix[high][col_mid]==target)
        {
            return true;
        }
        else if(target<matrix[low][col_mid])
        {
            return binary_search(matrix,low,0,col_mid-1,target);
        }
        else if(target>matrix[high][col_mid])
        {
            return binary_search(matrix,high,col_mid+1,matrix[high].length-1,target);
        }
        else if(target>matrix[low][col_mid] && target<matrix[high][0])
        {
            return binary_search(matrix,low,col_mid+1,matrix[low].length-1,target);
        }
        else
        {
            return binary_search(matrix,high,0,col_mid-1,target);
        }
        
    };