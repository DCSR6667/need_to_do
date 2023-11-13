'''

22.    1
       0 1
       1 0 1
       0 1 0 1
       1 0 1 0 1

'''



def pattern22(num):
    i=1 
   
  
    while i<=num:
        j=1
        if i%2==0:
            p=0
        else:
            p=1
            
        while j<=i:
            if p==1:
                print(p,end=" ")
                p=0
            else:
                print(p,end=" ")
                p=1 
            j+=1
        print()
        i+=1

num=int(input("enter number of lines"))
pattern22(num)

