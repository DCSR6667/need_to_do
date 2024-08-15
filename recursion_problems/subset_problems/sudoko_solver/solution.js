/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const issafe=(board,row,col,ele)=>
    {
        // checking rows and columns
        var i=0;
        while(i<9)
        {
            if(board[row][i]==ele)
            {
                return false;
            }
            if(board[i][col]==ele)
            {
                return false;
            }
            i+=1;
        }
        // checking sub boxes
        var r1=Math.floor(row/3)*3;
        var c1=Math.floor(col/3)*3;
        var i=0;
        while(i<3)
        {
            var j=0;
            while(j<3)
            {
            if(board[r1+i][c1+j]==ele)
            {
                return false;
            }
            j+=1;
    
        }
            i+=1;
        }
    
        return true;
       
    };

const helper=(board,row,col)=>
{

    if(row>=9)
    {
        return true;

    }
    if(col>=9)
    {
        return helper(board,row+1,0);
        

    }

    if(board[row][col]!=".")
    {
        return helper(board,row,col+1);
    }
    else
    {
        var i=1;
        while(i<=9)
        {
            if(issafe(board,row,col,i))
            {
                board[row][col]=i.toString();
                var res=helper(board,row,col+1);
                if(res==true)
                {
                    return true;
                    

                }
                else
                {
                        board[row][col]=".";

                }
                
            }
            i+=1;
        }
    }


};
    
    
var solveSudoku = function(board) {

    helper(board,0,0);
    
};



/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


// const issafe=(board,row,col,ele)=>
//     {
//         // checking rows and columns
//         var i=0;
//         while(i<9)
//         {
//             if(board[row][i]==ele)
//             {
//                 return false;
//             }
//             if(board[i][col]==ele)
//             {
//                 return false;
//             }
//             i+=1;
//         }
//         // checking sub boxes
//         var r1=Math.floor(row/3)*3;
//         var c1=Math.floor(col/3)*3;
//         var i=0;
//         while(i<3)
//         {
//             var j=0;
//             while(j<3)
//             {
//             if(board[r1+i][c1+j]==ele)
//             {
//                 return false;
//             }
//             j+=1;
    
//         }
//             i+=1;
//         }
    
//         return true;
       
        
        
    
//     };
    
    
    
    
//     var solveSudoku = function(board) {
    
//         var i=0;
//         while(i<9)
//         {
//             var j=0;
//             while(j<9)
//             {
//                 if(board[i][j]==".")
//                 {
//                     var ele=1;
//                     while(ele<=9)
//                     {
//                         if(issafe(board,i,j,ele))
//                         {
//                             board[i][j]=ele.toString();
//                             var res=solveSudoku(board);
//                             if(res==true)
//                             {
//                                 return true;
//                             }
//                             else
//                             {
//                                 board[i][j]=".";
    
//                             }
                            
    
    
//                         }
    
//                         ele+=1;
//                     }
//                     return false;
    
//                 }
//                 j+=1;
//             }
//             i+=1;
//         }
//         return true;
    
        
        
        
    
        
//     };