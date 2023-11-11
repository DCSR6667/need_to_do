'''
5.  *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *

'''

def pattern5(num):
    i=1
    while i<=(2*num)-1:
        j=1
        if i<=num:
            while j<=i:
                print("*",end="")
                j+=1
            print()
        else:
            j=1
            while j<=(num-(i%num)):
                print("*",end="")
                j+=1
            print()
        i+=1
num=int(input("enter number of lines"))
pattern5(num)
