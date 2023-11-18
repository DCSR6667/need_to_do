'''

33.    a
       B c
       D e F
       g H i J
       k L m N o

'''

def pattern33(num):
    i=1
    bin=96
    option="small"
    while i<=num:
        j=1
        while j<=i:
            if option=="small":
                bin=bin+1
                print(chr(bin),end=" ")
                option="capital"
            else:
                bin=(bin-31)
                print(chr(bin),end=" ")
                bin=bin+32
                option="small"
            j+=1
        print()
        i+=1
num=int(input("enter number of rows"))
pattern33(num)
