'''
2.  *
    **
    ***
    ****
    *****

'''

def pattern2(num):
    i=1
    while i<=num:
        j=1
        while j<=i:
            print("*",end="")
            j+=1
        print()
        i+=1

num=int(input("enter number of lines"))
pattern2(num)
