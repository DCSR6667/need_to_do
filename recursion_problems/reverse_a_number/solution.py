def no_of_digits(n):
    if n==0:
        return 0
    c=1
    val=no_of_digits(n//10)
    return c+val

def reverse_digits(n,digit):
    if n==0:
        return 0
    s=(n%10)*(10**(digit-1))
    val=reverse_digits(n//10,digit-1)
    return s+val



n=int(input("enter a number"))
print(reverse_digits(n,no_of_digits(n)))






