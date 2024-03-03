def reset(num,i):
    mask=~(1<<(i-1))
    return bin(num&mask)
print(bin(0B10110110))
print(reset(0B10110110,8))