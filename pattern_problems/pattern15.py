'''
15.      *
        * *
       *   *
      *     *
     *       *
      *     *
       *   *
        * *
         *

'''

def pattern15(num):
    i=1
    while i<=2*num-1:
        if i<=num:
            j=1
            while j<=num-i:
                print(" ",end="")
                j+=1
            j=1
            while j<=2*i-1:
                if j==1 or j==2*i-1:
                    print("*",end="")
                else:
                    print(" ",end="")
                j+=1
        else:
            j=1
            while j<=i-num:
                print(" ",end="")
                j+=1
            j=1
            while j<=(2*num)-2*(i%num)-1:
                if j==1 or j==(2*num)-2*(i%num)-1:
                    print("*",end="")
                else:
                    print(" ",end="")
                j+=1
        print()
        i+=1


num=int(input("enter number of lines"))
pattern15(num)