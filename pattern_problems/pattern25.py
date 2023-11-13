'''
25.       *****
         *   *
        *   *
       *   *
      *****


'''

def pattern25(num):
    i=1
    while i<=num:
        j=1
        while j<=num-i:
            print(" ",end="")
            j+=1
        j=1
        while j<=num:
            if j==1 or j==num:
                print("*",end="")
            elif i==1 or i==num:
                print("*",end="")
            else:
                print(" ",end="")
            j+=1
        print()
        i+=1
num=int(input("enter number of lines"))
pattern25(num)