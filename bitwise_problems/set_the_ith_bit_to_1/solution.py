def set(num,i):
    mask=1<<(i-1)
    return bin(num|mask)

print(bin(0B1010110))
print(set(0B1010110,2))