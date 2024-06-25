def print_rev(n):
    if n==1:
        print(n)
        return
    print_rev(n-1)
    print(n)

def print_order(n):
    if n==0:
        return 
    print(n)
    print_order(n-1)


def print_both(n):
    if n==0:
        return
    print(n)
    print_both(n-1)
    print(n)

n=int(input("enter a number"))
print_both(n)