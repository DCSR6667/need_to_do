'''

34.    E D C B A
       D C B A
       C B A
       B A
       A

'''

def pattern34(num):
    i=1
    while i<=num:
        j=1
        while j<=num-i+1:
            print(chr(66+num-i-j),end=" ")
            j+=1
        print()
        i+=1



num=int(input("enter number of rows"))
pattern34(num)