/**
 * @param {number} n
 * @return {string[][]}
 */

const issafe=(board,row,col)=>
    {
        // checking row
        var i=0;
        while(i<col)
        {
            if(board[row][i]=="Q")
            {
                return false;
            }
            i+=1;
        }
    
        // checking col
    
        var j=0;
        while(j<row)
        {
            if(board[j][col]=="Q")
            {
                return false;
            }
            j+=1;
        }
        
    
        // checking left diagonal
    
        var i=1;
        var end=Math.min(row,col);
        while(i<=end)
        {
            if(board[row-i][col-i]=="Q")
            {
                return false;
            }
            i+=1;
        }
    
        // checking right diagonal
    
        var i=1;
        var end=Math.min(row,(board[0].length-1-col));
        while(i<=end)
        {
            if(board[row-i][col+i]=="Q")
            {
                return false;
            }
            i+=1;
        }
    
        return true;
    
    };
    
    
    const helper=(board,row,col,n,combined_res)=>
    {
    
        if(n==0)
        {
            combined_res.push([...board]);
            return;
        }
    
        if(col>=board[0].length || row>=board.length)
        {
            return;
        }
    
    
        if(issafe(board,row,col))
        {
            board[row]=board[row].slice(0,col)+"Q"+board[row].slice(col+1,board[0].length)
            helper(board,row+1,0,n-1,combined_res);
            board[row]=board[row].slice(0,col)+"."+board[row].slice(col+1,board[0].length)
            helper(board,row,col+1,n,combined_res);
    
        }
        else
        {
            helper(board,row,col+1,n,combined_res);
    
        }
    
    
    };
    
    var solveNQueens = function(n) {
        var combined_res=[];
        var board=[];
        var j=1;
        while(j<=n)
        {
            var i=1;
            var s=""
            while(i<=n)
            {
                s=s+".";
                i+=1;
            }
            board.push(s);
            j+=1;
    
        
        }
    
       
        helper(board,0,0,n,combined_res);
        return combined_res;
    
    
    
    
    
        
    };