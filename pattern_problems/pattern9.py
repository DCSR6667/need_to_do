'''
9.  *********
     *******
      *****
       ***
        *

'''

def pattern9(num):
    i=1
    while i<=num:
        j=1
        while j<=i-1:
            print(" ",end="")
            j+=1
        j=1
        while j<=2*num-2*i+1:
            print("*",end="")
            j+=1
        print()
        i+=1



num=int(input("enter number of lines"))
pattern9(num)