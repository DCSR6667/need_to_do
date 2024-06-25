def count_zeroes(n):
    if n==0:
        return 0
    rem=n%10
    if rem==0:
        c=1
    else:
        c=0
    val=count_zeroes(n//10)
    return c+val

def count_zeroes1(n,count):
    if n==0:
        return count
    rem=n%10
    if rem==0:
        count=count+1
    return count_zeroes1(n//10,count)


n=int(input("enter a number"))
print(count_zeroes1(n,0))
