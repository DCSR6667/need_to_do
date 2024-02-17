def maze_count(row,col):
    if row==1 or col==1:
        return 1
    res1=maze_count(row-1,col)
    res2=maze_count(row,col-1)
    return res1+res2


def maze_print_path(res,row,col):
    if row==1 and col==1:
        print(res)
    if row!=1:
        maze_print_path(res+"D",row-1,col)
    if col!=1:
        maze_print_path(res+"R",row,col-1)
        
def maze_print_diagonal_path(res,row,col):
    if row==1 and col==1:
        print(res)
        return
    if row!=1:
        maze_print_diagonal_path(res+"H",row-1,col)
    if col!=1:
        maze_print_diagonal_path(res+"V",row,col-1)
        
    if row>1 and col>1:
        maze_print_diagonal_path(res+"D",row-1,col-1)
        
        
def maze_print_path_obstacles(res,row,col,maze):
    if row==len(maze)-1 and col==len(maze[0])-1:
        print(res)
        return
    if not(maze[row][col]):
        return
    if row<len(maze)-1:
        maze_print_path_obstacles(res+"V",row+1,col,maze)
    if col<len(maze[0])-1:
        maze_print_path_obstacles(res+"H",row,col+1,maze)
        
        
 
           


maze=[[True,True,True],[True,True,True],[True,True,True]]