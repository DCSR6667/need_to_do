def product_of_digits(num):
    if num==0:
        return 1
    d=num%10
    f=product_of_digits(num//10)
    return d*f

print(product_of_digits(1234))