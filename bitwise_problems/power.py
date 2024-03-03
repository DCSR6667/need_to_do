'''
time complexity of this problem is O(log(x))

where x is the number of the digits
'''
def power(base,power):
    ans=1
    while power>0:
        last=power&1
        if last==1:
            ans=ans*base
        base=base*base
        power=power>>1
    return ans
print(power(2,4))
    