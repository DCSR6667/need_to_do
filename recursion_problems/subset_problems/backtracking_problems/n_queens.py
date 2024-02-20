def issafe(board,row,col):
    # check vertical 
    i=0
    while i<row:
        if board[i][col]:
            return False
        i+=1
        
    # left diagonal  
    val=min(row,col)
    start=1
    while start<=val:
        if board[row-start][col-start]:
            return False
        start+=1
       
    
    val=min(row,len(board)-col-1)
    start=1
    while start<=val:
        if board[row-start][col+start]:
            return False
        start+=1
       
    
    return True
    

def n_queens(board,row):
    if row==len(board):
      
        for i in board:
            for j in i:
                if j==True:
                    print("Q",end=" ")
                else:
                    print("X",end=" ")
            print()
        print()
        return 1
    
    col=0
    count=0
    while col<len(board[0]):
        if issafe(board,row,col):
            board[row][col]=True
            count+=n_queens(board,row+1)
            board[row][col]=False
        col+=1
    return count
        
        

n=int(input("enter dimension"))
board=[]
for i in range(n):
    l=[]
    for j in range(n):
        l.append(False)
    board.append(l)
        

print(n_queens(board,0))
    