/**
 * this problem can be solved by using binary search pattern
 * time complexity-----O(log(cols)*rows)
 * @param {number[][]} mat
 * @return {number[]}
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const find_max=(mat,col)=>
    {
        var i=0;
        var max=-Infinity;
        var row_index=-1
        while(i<mat.length)
        {
            if(mat[i][col]>max)
            {
                max=mat[i][col];
                row_index=i;
            }
            i+=1;
    
        }
        return row_index;
    }
    var findPeakGrid = function(mat) {
        var low=0;
        var high=mat[0].length-1;
        var left,right,curr;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            var row_index=find_max(mat,mid);
            curr=mat[row_index][mid];
            left=(mid>0?mat[row_index][mid-1]:-Infinity);
            right=(mid<mat[row_index].length-1?mat[row_index][mid+1]:-Infinity)
            
            if(curr>left && curr>right)
            {
                return [row_index,mid];
            }
            else if(curr<left && curr>right)
            {
                high=mid-1;
            }
            else if(curr>left && curr<right)
            {
                low=mid+1;
            }
        }
        
    };





/**
 * time complexity-----O(rows*cols)
 * @param {number[][]} mat
 * @return {number[]}
 */

var check=(mat,i,j)=>
    {
        var top,bottom,left,right,ele=mat[i][j];
        top=-1,left=-1,right=-1,bottom=-1;
        if(i>0){ top=mat[i-1][j] }
        if(i<mat.length-1){ bottom=mat[i+1][j]}
        if(j>0) { left=mat[i][j-1]}
        if(j<mat[i].length-1) { right=mat[i][j+1]}
    
        if(ele>top && ele>left && ele>bottom && ele>right)
        {
            return true;
        }
        else
        {
            return false;
        }
        
        
    
    };
    
    var findPeakGrid = function(mat) {
        var i=0
        while(i<mat.length)
        {
            var j=0;
            while(j<mat[i].length)
            {
                var bool=check(mat,i,j);
                if(bool)
                {
                    return [i,j]
                }
                j+=1;
            }
            i+=1;
        }
        
    };