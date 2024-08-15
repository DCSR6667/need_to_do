'''
time complexity--O(1)
'''
def xor(num):
    if num%4==0:
        return num
    elif num%4==1:
        return 1
    elif num%4==2:
        return num+1
    elif num%3==0:
        return 0

def xor_range(num1,num2):
    return xor(num2)^xor(num1-1)

print(xor_range(3,9))