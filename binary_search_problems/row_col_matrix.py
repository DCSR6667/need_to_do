'''
this can be solved by using binary search pattern--O(n+n)==O(2n)
'''

def row_col_matrix(matrix,target):
    low=0
    high=len(matrix[0])-1
    while low<len(matrix) and high>=0:
        if target==matrix[low][high]:
            return [low,high]
        elif target>matrix[low][high]:
            low=low+1
        else:
            high=high-1
    return [-1,-1]

# here the matrix is row wise and column wise sorted matrix but not fully sorted matrix
matrix=[[1,2,3],[4,5,6],[7,8,9]]
print(row_col_matrix(matrix,10))