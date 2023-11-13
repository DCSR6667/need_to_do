'''
13.      *
        * *
       *   *
      *     *
     *********

'''

def pattern13(num):
    i=1
    while i<=num:
        j=1
        while j<=num-i:
            print(" ",end="")
            j+=1

        j=1
        while j<=2*i-1:
                if j==1 or j==2*i-1:
                        print("*",end="")
                elif i==num:
                        print("*",end="")
                else:
                        print(" ",end="")
                j+=1

        print() 
        i+=1


num=int(input("enter number of lines"))
pattern13(num)
      