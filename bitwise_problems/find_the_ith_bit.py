def find(num,i):
    mask=1<<(i-1)
    return (num&mask)>>(i-1)
print(find(0b10110110,7))