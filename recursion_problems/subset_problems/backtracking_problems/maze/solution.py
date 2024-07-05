def maze_print_all_paths(res,row,col,maze):
    if row==len(maze)-1 and col==len(maze[0])-1:
        print(res)
        return
    if not(maze[row][col]):
        return
    maze[row][col]=False
    
    if row<len(maze)-1:
        maze_print_all_paths(res+"D",row+1,col,maze)
        
    if col<len(maze[0])-1:
        maze_print_all_paths(res+"R",row,col+1,maze)
  
    if row>0:
        maze_print_all_paths(res+"U",row-1,col,maze)
        
    if col>0:
        maze_print_all_paths(res+"L",row,col-1,maze)
        
    maze[row][col]=True
    
def maze_print_all_paths_and_matrix(res,row,col,maze,step,path):
    if row==len(maze)-1 and col==len(maze[0])-1:
        path[row][col]=step
        
        for i in path:
            print(i)
        print(res)
        print()
        
        path[row][col]=0
        return
    
    if not(maze[row][col]):
        return
    
    maze[row][col]=False
    
    
    path[row][col]=step
    
    if row<len(maze)-1:
        maze_print_all_paths_and_matrix(res+"D",row+1,col,maze,step+1,path)
        
    if col<len(maze[0])-1:
        maze_print_all_paths_and_matrix(res+"R",row,col+1,maze,step+1,path)
  
    if row>0:
        maze_print_all_paths_and_matrix(res+"U",row-1,col,maze,step+1,path)
        
    if col>0:
        maze_print_all_paths_and_matrix(res+"L",row,col-1,maze,step+1,path)
        
    maze[row][col]=True
    
    path[row][col]=0
    
    
maze=[[True,True,True],[True,True,True],[True,True,True]]
path=[[0,0,0],[0,0,0],[0,0,0]]

maze_print_all_paths_and_matrix("",0,0,maze,1,path)