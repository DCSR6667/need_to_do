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
    
print(xor(9))