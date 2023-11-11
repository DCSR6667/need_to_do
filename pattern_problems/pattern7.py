'''

7.   *****
      ****
       ***
        **
         *
'''

def pattern7(num):
    i=1
    while i<=num:
        j=1
        while j<=i-1:
            print(" ",end="")
            j+=1
        j=1
        while j<=(num-i+1):
            print("*",end="")
            j+=1
        print()
        i+=1
num=int(input("enter number of lines"))
pattern7(num)
