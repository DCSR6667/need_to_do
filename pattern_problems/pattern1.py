'''

1.  *****
    *****
    *****
    *****
    *****

*/
'''

def pattern1(num):
    i=1
    while i<=num:
        j=1
        while j<=num:
            print("*",end="")
            j+=1
        print()
        i+=1
num=int(input("enter number of lines:"))
pattern1(num)

