'''
35.    1      1
       12    21
       123  321
       12344321

'''

def pattern35(num):
    i=1
    while i<=num:
        j=1
        while j<=i:
            print(j,end="")
            j+=1
        j=1
        while j<=2*num-2*i:
            print(" ",end="")
            j+=1
        j=i
        while j>=1:
            print(j,end="")
            j-=1
        print()
        i+=1




num=int(input("enter number of rows"))
pattern35(num)