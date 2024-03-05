import math

'''
time complexity---O(n)
'''
def factors(num):
    i=1
    l=[]
    while i<=num:
        if num%i==0:
            l.append(i)
        i+=1
    return l

'''
time complexity---O(sqrt(n))
'''
def factors1(num):
    i=1
    l=[]
    l1=[]
    while i<=math.sqrt(num):
        if num%i==0:
            if num//i==i:
                l.append(i)
            else:
                l.append(i)
                l1.append(num//i)
        i+=1
    i=len(l1)-1
    while i>=0:
        l.append(l1[i])
        i-=1
    return l
                

print(factors1(40))