def factorial(n):
    if n==1:
        return 1
    prod=n
    val=factorial(n-1)
    return prod*val
n=int(input("enter a number"))
print(factorial(n))