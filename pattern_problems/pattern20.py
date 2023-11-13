'''
20.    ****
       *  *
       *  *
       *  *
       ****

'''

def pattern20(num):
    i=1
    while i<=num:
        j=1
        while j<=num-1:
            if j==1 or j==num-1:
                print("*",end="")
            elif i==1 or i==num:
                print("*",end="")
            else:
                print(" ",end="")
            j+=1
        print()
        i+=1



num=int(input("enter number of lines"))
pattern20(num)