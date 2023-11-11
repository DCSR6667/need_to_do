'''
4.  1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5

'''

def pattern4(num):
    i=1
    while i<=num:
        j=1
        while j<=i:
            print(j,end="")
            j+=1
        print()
        i+=1

num=int(input("enter number of lines"))
pattern4(num)