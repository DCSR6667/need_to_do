def pattern1(row,col):
    if row==0:
        return
    if col>row:
        print()
        pattern1(row-1,1)
    else:
        print("*",end=" ")
        pattern1(row,col+1)
pattern1(5,1)
    