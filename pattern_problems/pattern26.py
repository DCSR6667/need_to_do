'''
26.   1 1 1 1 1 1
      2 2 2 2 2
      3 3 3 3
      4 4 4
      5 5
      6

'''

def pattern26(num):
    i=1
    while i<=num:
        j=1
        while j<=num-i+1:
            print(i,end=" ")
            j+=1
        print()
        i+=1

num=int(input("enter number of lines"))
pattern26(num)
