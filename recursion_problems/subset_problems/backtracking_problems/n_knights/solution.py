def issafe(board,row,col):
    if isvalid(board,row-2,col-1):
        if board[row-2][col-1]:
            return False
        
    if isvalid(board,row-2,col+1):
        if board[row-2][col+1]:
            return False
        
    if isvalid(board,row-1,col-2):
        if board[row-1][col-2]:
            return False
        
    if isvalid(board,row-1,col+2):
        if board[row-1][col+2]:
            return False
        
    return True
        
    
    
def isvalid(board,row,col):
    if (row>=0 and row<=len(board)-1) and (col>=0 and col<=len(board[0])-1):
        return True
    else:
        return False
    


def n_knights(board,row,col,knights):
    if knights==0:
        for i in board:
            for j in i:
                if j==True:
                    print("K",end=" ")
                else:
                    print("X",end=" ")
            print()
        print()
        return 1
    
    if row==len(board)-1 and col==len(board[0]):
        return 0
    
    if col==len(board[0]):
       return n_knights(board,row+1,0,knights)
        
        
    val1=0
    if issafe(board,row,col):
        board[row][col]=True
        val1=n_knights(board,row,col+1,knights-1)
        board[row][col]=False
        
    val2=n_knights(board,row,col+1,knights)
    
    return val1+val2
        
       
       
       
n=int(input("enter dimension"))
board=[]
for i in range(n):
    l=[]
    for j in range(n):
        l.append(False)
    board.append(l)
        

print(n_knights(board,0,0,n))

    
    
    