'''
time complexity-----O(n)
'''

def isprime(num):
    count=0
    i=1
    while i<=num:
        if num%i==0:
            count+=1
        i+=1
    return count==2

'''
for prime numbers it is O(n)
for non prime numbers it is less than O(n)

'''
def isprime1(num):
    i=2
    while i<num:
        if num%i==0:
            return False
        i+=1
    return True

'''
time complexity----O(sqrt(n))

'''
def isprime3(num):
    if num<=1:
        return False
    c=2
    while c*c<=num:
        if num%c==0:
            return False
        c+=1
    return True

print(isprime3(2))
    