def count_no_of_bits(n):
    count=0
    while n>0:
        count+=1
        n=n>>1
    return count
print(count_no_of_bits(5))
    