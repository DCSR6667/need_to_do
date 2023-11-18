'''

16.           1
            1   1
          1   2   1
        1   3   3   1
      1   4   6   4   1

'''

def pattern16(num):
    l=[[1],[1,1]]
    i=1
    #generating pascal array
    while i<num-1:
        j=0
        l1=[]
        while j<len(l[i]):
            
            if j==0:
                l1.append(1)
            elif j==len(l[i])-1:
                l1.append(l[i][j]+l[i][j-1])
                l1.append(1)
            else:
                l1.append(l[i][j]+l[i][j-1])
            j+=1
        l.append(l1)
        i+=1
    
    #printing pascal array
    i=0
    while i<len(l):
        j=1
        while j<=num-i:
            print(" ",end="")
            j+=1
        j=0
        while j<len(l[i]):
            
            print(l[i][j],end=" ")
            j+=1
        print()
       
        i+=1


num=int(input("enter number of rows"))
pattern16(num)