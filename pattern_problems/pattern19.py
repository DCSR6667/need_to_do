'''
19.    *        *
       **      **
       ***    ***
       ****  ****
       **********
       ****  ****
       ***    ***
       **      **
       *        *

'''

def pattern19(num):
    i=1
    while i<=2*num-1:
        if i<=num:
            j=1
            while j<=i:
                print("*",end="")
                j+=1
            j=1
            while j<=2*num-2*i:
                print(" ",end="")
                j+=1
            j=1
            while j<=i:
                print("*",end="")
                j+=1
        else:
            j=1
            while j<=2*num-i:
                print("*",end="")
                j+=1
            j=1
            while j<=(i-num)*2:
                print(" ",end="")
                j+=1
            j=1
            while j<=2*num-i:
                print("*",end="")
                j+=1
        print()
        i+=1


        

num=int(input("enter number of rows"))
pattern19(num)