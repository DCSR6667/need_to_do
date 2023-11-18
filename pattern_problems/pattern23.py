'''

23.        *      *
         *   *  *   *
       *      *      *

'''

def pattern23(num):
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
            else:
                print(" ",end="")
            j+=1


        cond=num-i
        if i==1:
            cond=num
        j=1
        while j<=cond:
            print(" ",end="")
            j+=1
        



        cond=2*i-1
        if i==num:
            cond=2*i-2
        j=1
        while j<=cond:
            if j==1 or j==cond:
                if j==1 and i==num:
                    print(" ",end="")
                else:
                    print("*",end="")
            else:
                print(" ",end="")
            j+=1

        print()
        i+=1


        

        
        
        


num=int(input("enter number of rows"))
pattern23(num)