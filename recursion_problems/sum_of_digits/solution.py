def sum_of_digits(n):
    if n==0:
        return 0
    last=n%10
    val=sum_of_digits(n//10)
    return last+val

n=int(input("enter a number"))
print(sum_of_digits(n))