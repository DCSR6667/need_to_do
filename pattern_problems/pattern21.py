'''
21.    1
       2  3
       4  5  6
       7  8  9  10
       11 12 13 14 15

'''

def pattern21(num):
    i=1 
    p=1
    while i<=num:
        j=1
        while j<=i:
            print(p,end=" ")
            p+=1
            j+=1
        print()
        i+=1

num=int(input("enter number of lines"))
pattern21(num)

