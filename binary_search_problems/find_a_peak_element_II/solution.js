/**
 * time complexity-----O(log(cols)*rows)
 * @param {number[][]} mat
 * @return {number[]}
 */

var get_max=(mat,rows,col)=>
    {
        var i=0;
        var maxi=Math.log(0);
        var index;
        while(i<rows)
        {
            if(mat[i][col]>maxi)
            {
                
                maxi=mat[i][col];
                index=[i,col];
            }
            i+=1;
    
        }
        return index;
    
    }
    var findPeakGrid = function(mat) {
        var rows=mat.length;
        var cols=mat[0].length;
        var left,right;
        var low=0;
        var high=cols-1;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            var [i,j]=get_max(mat,rows,mid);
            
            if(j<=0){left=-1;}else{left=mat[i][j-1];}
            if(j>=cols-1){right=-1;}else{right=mat[i][j+1];}
            
            if(mat[i][j]>left && mat[i][j]>right)
            {
                return [i,j];
            }
            else if(mat[i][j]>left && mat[i][j]<=right)
            {
                low=mid+1;
            }
            else if(mat[i][j]<=left && mat[i][j]>right)
            {
                high=mid-1;
            }
    
        }
        
    };





/**
 * time complexity-----O(rows*cols)
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    var rows=mat.length;
    var cols=mat[0].length;
    var ele,left,right,top,down;
    var i=0;
    while(i<rows)
    {
        var j=0;
        while(j<cols)
        {
            
            ele=mat[i][j];
            left=(j<=0)?-1:mat[i][j-1];
            right=(j>=cols-1)?-1:mat[i][j+1];
            top=(i<=0)?-1:mat[i-1][j];
            down=(i>=rows-1)?-1:mat[i+1][j];
            if(ele>left && ele>right && ele>top && ele>down)
            {
                console.log(left,right,top,down);
                return [i,j];
            }
            j+=1;
        }
        i+=1;
    }
    
};