'''
time complexity ----O(logn)
'''
import math
def no_of_digits(num,b):
    return int(math.log(num)//math.log(b))+1
num=int(input("enter a number"))
base=int(input("enter a base"))
print(no_of_digits(num,base))
    