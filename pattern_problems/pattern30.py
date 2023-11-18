'''

30.         1
          2 1 2
        3 2 1 2 3
      4 3 2 1 2 3 4
    5 4 3 2 1 2 3 4 5

'''


def pattern30(num):
    i=1
    while i<=num:
        j=1
        while j<=num-i:
            print(" ",end="")
            j+=1
        j=1
        while j<=i:
            print((i+1-j),end="")
            j+=1
        j=1
        while j<=i-1:
            print((j+1),end="")
            j+=1
        print()
        i+=1
num=int(input("enter number of rows"))
pattern30(num)