'''
32.    E
       D E
       C D E
       B C D E
       A B C D E

'''

def pattern32(num):
    i=1
    while i<=num:
        j=1
        bin=(64+num-i)
        while j<=i:
            print(chr(bin+j),end=" ")
            j+=1
        print()
        i+=1

    


num=int(input("enter number of rows"))
pattern32(num)