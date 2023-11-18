'''
18.   **********
      ****  ****
      ***    ***
      **      **
      *        *
      *        *
      **      **
      ***    ***
      ****  ****
      **********


'''

def pattern18(num):
    i=1
    while i<=2*num:
        if i<=num:
            j=1
            while j<=num-i+1:
                print("*",end="")
                j+=1
            j=1
            while j<=(i-1)*2:
                print(" ",end="")
                j+=1
            j=1
            while j<=num-i+1:
                print("*",end="")
                j+=1
        else:
            j=1
            while j<=i-num:
                print("*",end="")
                j+=1
            j=1
            cal=i%num
            if cal==0:
                cal=num
            while j<=2*i-(cal)*4:
                print(" ",end="")
                j+=1
            j=1
            while j<=i-num:
                print("*",end="")
                j+=1
        print()
        i+=1


num=int(input("enter number of rows"))
pattern18(num)