'''

24.    *        *
       **      **
       * *    * *
       *  *  *  *
       *   **   *
       *   **   *
       *  *  *  *
       * *    * *
       **      **
       *        *
'''

def pattern24(num):
    i=1
    while i<=2*num:
        if i<=num:
            j=1
            while j<=i:
                if j==1 or j==i:
                    print("*",end="")
                else:
                    print(" ",end="")
                j+=1
            
            j=1
            while j<=2*num-2*i:
                print(" ",end="")
                j+=1
            j=1

            while j<=i:
                if j==1 or j==i:
                    print("*",end="")
                else:
                    print(" ",end="")
                j+=1
        else:
            j=1
            while j<=2*num-i+1:
                if j==1 or j==2*num-i+1:
                    print("*",end="")
                else:
                    print(" ",end="")
                j+=1
            
            j=1
            while j<=2*i-2*num-2:
                print(" ",end="")
                j+=1
            j=1

            while j<=2*num-i+1:
                if j==1 or j==2*num-i+1:
                    print("*",end="")
                else:
                    print(" ",end="")
                j+=1

        print()
        i+=1

num=int(input("enter number of rows"))
pattern24(num)

            