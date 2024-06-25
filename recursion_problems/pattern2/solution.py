def pattern2(row,col):
    if row==0:
        return
    if col>row:
        pattern2(row-1,1)
        print()
    else:
        pattern2(row,col+1)
        print("*",end=" ")
pattern2(5,1)
    