# // how many ways we can make sum num with these [1,2,3,4,5,6] numbers

def dice(res,inp):
    if inp==0:
        print(res)
        return
    i=1
    while i<=6 and i<=inp:
        dice(res+str(i),inp-i)
        i+=1
        
        
def dice1(res,inp):
    if inp==0:
        return [res]
    i=1
    net=[]
    while i<=6 and i<=inp:
        net=net+dice1(res+str(i),inp-i)
        i+=1
    return net

def dice2(res,inp,net):
    if inp==0:
        net.append(res)
        return net
    i=1
    while i<=6 and i<=inp:
        dice2(res+str(i),inp-i,net)
        i+=1
    return net
    
    
    
print(dice2("",10,[]))