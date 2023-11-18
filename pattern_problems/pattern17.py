'''
17.      1
        212
       32123
      4321234
       32123
        212
         1

'''
def pattern17(num):
    i=1
    while i<=2*num-1:
        if i<=num:
            j=1
            while j<=num-i:
                print(" ",end="")
                j+=1
            j=1
            while j<=i:
                print((i+1-j),end="")
                j+=1
            j=1
            while j<=i-1:
                print((1+j),end="")
                j+=1
        else:
            j=1
            while j<=i-num:
                print(" ",end="")
                j+=1
            j=1
            while j<=num-(i%num):
                print((num-(i%num)+1-j),end="")
                j+=1
            j=1
            while j<=num-(i%num)-1:
                print((1+j),end="")
                j+=1

        print()
        i+=1
            
num=int(input("enter number of rows"))
pattern17(num)