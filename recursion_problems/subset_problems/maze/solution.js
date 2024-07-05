const maze_print_paths=(row,col,res)=>
    {
        if(row==1 && col==1)
            {
                console.log(res);
                return;
            }
        if(col!=1)
            {
                maze_print_paths(row,col-1,res+"R");
            }
        if(row!=1)
            {
                maze_print_paths(row-1,col,res+"D");
            }


    };


    const maze_print_paths_with_diagonals=(row,col,res)=>
        {
            var combine_res=[];
            if(row==1 && col==1)
                {
                    combine_res.push(res);
                    return combine_res;
                }
            if(col!=1)
                {
                    combine_res=combine_res.concat(maze_print_paths_with_diagonals(row,col-1,res+"H"));
                }
            if(row!=1)
                {
                    combine_res=combine_res.concat(maze_print_paths_with_diagonals(row-1,col,res+"V"));
                }
            if(row!=1 && col!=1)
                {
                    combine_res=combine_res.concat(maze_print_paths_with_diagonals(row-1,col-1,res+"D"));
                }

            return combine_res;
    
    
        };

const maze_count=(row,col)=>
    {
        if(row==1 || col==1)
            {
                return 1;
            }
        var f1=maze_count(row,col-1);
        var f2=maze_count(row-1,col);
        return f1+f2;

    };


const maze_with_obstacles=(maze,row,col,res)=>
    {
        var combine_res=[];
        if(row==maze.length-1 && col==maze[0].length-1)
            {
                combine_res.push(res);
                return combine_res;


            }

            if(!maze[row][col])
                {
                    return;

                }

            if(col<maze[0].length-1)
                {
                    combine_res=combine_res.concat(maze_with_obstacles(maze,row,col+1,res+"H"));

                }

                if(row<maze.length-1)
                    {
                        combine_res=combine_res.concat(maze_with_obstacles(maze,row+1,col,res+"V"));
        
                    }


                

                if(row<maze.length-1 && col<maze[0].length-1)
                    {
                        combine_res=combine_res.concat(maze_with_obstacles(maze,row+1,col+1,res+"D"));
        
                    }

                return combine_res;

    };

var maze=[[true,true,true],[true,false,true],[true,true,true]]
console.log(maze_with_obstacles(maze,0,0,""));