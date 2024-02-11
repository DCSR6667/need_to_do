def is_palindrome(l,s,e):
    if s==e:
        return True
    if l[s]!=l[e]:
        return False
    return is_palindrome(l,s+1,e-1)

l=['m','a','d','d','m']
print(is_palindrome(l,0,len(l)-1))



