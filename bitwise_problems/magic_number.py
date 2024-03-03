def magic_number(num):
    res=0
    base=5
    while num>0:
        last=num&1
        res=res+last*base
        base=base*5
        num=num>>1
    return res
num=int(input("enter a number"))
print(magic_number(num))
        