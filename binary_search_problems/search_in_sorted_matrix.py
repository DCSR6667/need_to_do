'''
this problem can be solved by binary search pattern--O(logm+logn)

'''

def binary_search(matrix,row,colstart,colend,target):
    while colstart<=colend:
        colmid=(colstart+colend)//2
        if matrix[row][colmid]==target:
            return [row,colmid]
        elif target>matrix[row][colmid]:
            colstart=colmid+1
        else:
            colend=colmid-1
    return [-1,-1]

def search_in_sorted_matrix(matrix,target):
    rowstart=0
    rowend=len(matrix)-1
    col=len(matrix[0])-1
    colmid=col//2
    
    if rowend==1:
        return binary_search(matrix,0,0,col-1,target)
        
    while (rowend-rowstart)>1:
        rowmid=(rowstart+rowend)//2
        if matrix[rowmid][colmid]==target:
            return [rowmid,colmid]
        elif target>matrix[rowmid][colmid]:
            rowstart=rowmid
        else:
            rowend=rowmid
    # now we have two rows
    print(rowstart,rowend,colmid)
    if target==matrix[rowstart][colmid]:
        return [rowstart,colmid]
    elif target==matrix[rowend][colmid]:
        return [rowend,colmid]
    elif target<=matrix[rowstart][colmid-1]:
        return binary_search(matrix,rowstart,0,colmid-1,target)
    elif target>=matrix[rowstart][colmid+1] and target<=matrix[rowstart][col]:
        return binary_search(matrix,rowstart,colmid+1,col,target)
    elif target<=matrix[rowend][colmid-1]:
        return binary_search(matrix,rowend,0,colmid-1,target)
    elif target>=matrix[rowend][colmid+1] and target<=matrix[rowend][col]:
        return binary_search(matrix,rowend,colmid+1,col,target)
    
    return [-1,-1]
    

    
        
matrix=[[1,2,3],[4,5,6],[7,8,9]]      
print(search_in_sorted_matrix(matrix,10))