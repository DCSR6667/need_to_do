const issafe=(board,row,col)=>
    {

        
             // checking vertical
        var i=0;
        while(i<row)
            {
                if(board[i][col]==true)
                    {
                        return false;
                    }
                    i+=1;


                }



         // checking left diagonal
         var i=1;
         var num=Math.min(row,col);
         while(i<=num)
             {
                 if(board[row-i][col-i]==true)
                     {
                         return false;
                     }
                     i+=1;
 
 
                 }


        // checking right diagonal
        var i=1;
        var num=Math.min(row,board.length-col-1);
        while(i<=num)
            {
                if(board[row-i][col+i]==true)
                    {
                        return false;
                    }
                    i+=1;


                }

        return true;      

    };



const n_queens=(board,row,col)=>{
    if(row==board.length)
        {
            for(var i of board)
                {
                    for(var j of i)
                        {
                            if(j==true)
                                {
                                    process.stdout.write("Q ");
                                }
                            else{
                                process.stdout.write("X ");
                            }
                           
                        }
                        console.log();
                
                }
                console.log();
            
           
            return;
        }
    if(col==board[0].length)
        {
            return;
        }

    if(issafe(board,row,col))
        {
            board[row][col]=true;
            n_queens(board,row+1,0);
            board[row][col]=false;
            n_queens(board,row,col+1);
        }
        else{
            n_queens(board,row,col+1);

        }


};


var board=[[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false]];
n_queens(board,0,0);

