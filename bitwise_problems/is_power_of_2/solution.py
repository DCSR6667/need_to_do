def is_power_of_two(num):
    return num&(num-1)==0

def is_power_of_2(num):
    count=0
    while num>0:
        last=num&1
        if last==1:
            count+=1
        num=num>>1
    if count==1:
        return True
    else:
        return False
    
    
print(is_power_of_2(1))