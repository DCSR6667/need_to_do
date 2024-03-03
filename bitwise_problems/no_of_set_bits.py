def no_of_set_bits(num):
    count=0
    while num>0:
        last=num&1
        if last==1:
            count+=1
        num=num>>1
    return count
print(no_of_set_bits(7))
            