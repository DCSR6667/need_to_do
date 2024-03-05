'''
time complexity ----O(n*sqrt(n))

'''

def isprime(number):
    c=2
    while c*c<=number:
        if number%c==0:
            return False
        c+=1
    return True
        
    

def prime_range1(num):
    i=2
    l=[]
    while i<=num:
        if isprime(i):
            l.append(i)
        i+=1
    return l


'''

here we used extra matrix 
the main logic is when a number is prime number then all its multiples are not
prime

time complexity---O(sqrt(n)*log(log(n)))

'''
def prime_range2(num,matrix):
    c=2
    while c*c<=num:
        if matrix[c]:
            j=c*2
            while j<=num:
                matrix[j]=False
                j=j+c   
        c+=1
num=int(input("enter a number"))       
matrix=[True for i in range(num+1)]
prime_range2(num,matrix)

i=2
while i<len(matrix):
    if matrix[i]:
        print(i,"is a prime number")
    i+=1    
    