const maze_print_all_paths=(maze,row,col,res)=>
    {
      
        if(row==maze.length-1 && col==maze[0].length-1)
            {
                console.log(res);
                return;
            }

        if(!maze[row][col])
            {
                return;
            }


        maze[row][col]=false;
        
        if(col<maze.length-1)
            {
                maze_print_all_paths(maze,row,col+1,res+"R");
            }
        if(row<maze[0].length-1)
            {
                maze_print_all_paths(maze,row+1,col,res+"D");
            }

        if(row>0)
            {
                maze_print_all_paths(maze,row-1,col,res+"U");
            }

        if(col>0)
            {
                maze_print_all_paths(maze,row,col-1,res+"L"); 
            }

        if(row<maze.length-1 && col<maze[0].length-1)
            {
                maze_print_all_paths(maze,row+1,col+1,res+"X");

            }

        maze[row][col]=true;

    };



    const maze_print_all_paths_and_matrix=(maze,row,col,res,path,step)=>
        {
           
            if(row==maze.length-1 && col==maze[0].length-1)
                {
                    path[row][col]=step;
                    for(var i of path)
                        {
                            console.log(i);
                        }
                    console.log(res);
                    console.log();

                    path[row][col]=0;

                    return;
                }
    
            if(!maze[row][col])
                {
                    return;
                }
    
    
            maze[row][col]=false;
            path[row][col]=step;
            
            if(col<maze.length-1)
                {
                    maze_print_all_paths_and_matrix(maze,row,col+1,res+"R",path,step+1);
                }
            if(row<maze[0].length-1)
                {
                    maze_print_all_paths_and_matrix(maze,row+1,col,res+"D",path,step+1);
                }
    
            if(row>0)
                {
                    maze_print_all_paths_and_matrix(maze,row-1,col,res+"U",path,step+1);
                }
    
            if(col>0)
                {
                    maze_print_all_paths_and_matrix(maze,row,col-1,res+"L",path,step+1); 
                }
    
            if(row<maze.length-1 && col<maze[0].length-1)
                {
                    maze_print_all_paths_and_matrix(maze,row+1,col+1,res+"X",path,step+1);
                    
                }
    
            maze[row][col]=true;
            path[row][col]=0;
    
        };
    



var maze=[[true,true,true],[true,true,true],[true,true,true]];

var path=[[0,0,0],[0,0,0],[0,0,0]];

maze_print_all_paths_and_matrix(maze,0,0,"",path,1);