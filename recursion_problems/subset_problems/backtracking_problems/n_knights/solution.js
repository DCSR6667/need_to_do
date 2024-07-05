const issafe=(board,row,col)=>
    {
        if(isvalid(board,row-1,col-2))
            {
                if(board[row-1][col-2])
                    {
                        return false;
                    }
                

            }

            if(isvalid(board,row-1,col+2))
                {
                    if(board[row-1][col+2])
                        {
                            return false;
                        }
                    
    
                }

                if(isvalid(board,row-2,col-1))
                    {
                        if(board[row-2][col-1])
                            {
                                return false;
                            }
                        
        
                    }

                    if(isvalid(board,row-2,col+1))
                        {
                            if(board[row-2][col+1])
                                {
                                    return false;
                                }
                            
            
                        }

                return true;



    };

const isvalid=(board,row,col)=>
    {
        if((row>=0 && row<board.length) && (col>=0 && col<board[0].length))
            {
                return true;
            }
            else{
                return false;
            }


    };

const n_knights=(board,row,col,target)=>{
    var count=0;
    if(target==0)
        {
            for(var i of board)
                {
                    for(var j of i)
                        {
                            if(j==true)
                                {
                                    process.stdout.write("K ");
                                }
                            else{
                                process.stdout.write("X ");
                            }
                           
                        }
                        console.log();
            
        }
        console.log();
        return 1;
    }

    if(col==board[0].length && row==board.length-1)
        {
            return 0;
        }

    if(col==board[0].length)
        {
             return n_knights(board,row+1,0,target);
        }

    if(issafe(board,row,col))
        {
            board[row][col]=true;
            count=count+n_knights(board,row,col+1,target-1);
            board[row][col]=false;
            count=count+n_knights(board,row,col+1,target);

        }
    else{
        count=count+n_knights(board,row,col+1,target);

    }

return count;

};


var board=[[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false]]

console.log(n_knights(board,0,0,4));