// this problem can be solved by binary search---O(n+n)
const search=(matrix,target)=>
    {
        var row=0;
        var col=matrix[0].length-1;
        while(row<matrix.length && col>=0)
            {
                if(target==matrix[row][col])
                    {
                        return [row,col];
                    }
                else if(target>matrix[row][col])
                    {
                        row+=1;

                    }
                    else{
                        col-=1;

                    }
            }
            return [-1,-1];

    };


var matrix=[[10,20,30],[11,21,31],[13,25,35]];
console.log(search(matrix,31));