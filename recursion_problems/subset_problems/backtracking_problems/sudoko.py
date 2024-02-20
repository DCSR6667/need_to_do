import math
def issafe(board,row,col,num):
    # checking row
    for i in board[row]:
        if i==num:
            return False
        
    #checking column
    for i in board:
        if i[col]==num:
            return False
        
    #checking sub boxes 
    sqrt=int(math.sqrt(len(board)))
    rowstart=row-(row%sqrt)
    colstart=col-(col%sqrt)
    r=rowstart
    c=colstart
    while r<(rowstart+sqrt):
        while c<(colstart+sqrt):
            if board[r][c]==num:
                return False
            c+=1
        r+=1
        
    return True
    
    


def sudoko(board,row,col):
    if row==len(board)-1 and col==len(board):
        for i in board:
            for j in i:
                print(j,end=" ")
            print()
        return
    
    if col==len(board):
        sudoko(board,row+1,0)
        return
    
        
    
    if board[row][col]!=0:
        sudoko(board,row,col+1)
    else:
        i=1
        while i<=9:
            if issafe(board,row,col,i):
                board[row][col]=i
                sudoko(board,row,col+1)
                board[row][col]=0
            i=i+1
    
board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

       
sudoko(board,0,0)

       
        
        
        