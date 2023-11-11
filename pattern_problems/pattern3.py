'''
3.  *****
    ****
    ***
    **
    *
'''

def pattern3(num):
    i=1
    while i<=num:
        j=1
        while j<=(num-i+1):
            print("*",end="")
            j+=1
        print()
        i+=1
num=int(input("enter number of lines"))
pattern3(num)
