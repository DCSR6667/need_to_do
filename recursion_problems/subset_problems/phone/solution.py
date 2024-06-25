def phone(res,inp):
    if len(inp)==0:
        print(res)
        return
    digit=int(inp[0])
    start=(digit-1)*3
    end=(digit*3)-1
    while start<=end:
        phone(res+chr(97+start),inp[1:])
        start=start+1
        
        
def phone1(res,inp):
    if len(inp)==0:
        return [res]
    digit=int(inp[0])
    start=(digit-1)*3
    end=(digit*3)-1
    net=[]
    while start<=end:
        net=net+phone1(res+chr(97+start),inp[1:])
        start=start+1
    return net

def phone_count(res,inp):
    if len(inp)==0:
        return 1
    digit=int(inp[0])
    start=(digit-1)*3
    end=(digit*3)-1
    count=0
    while start<=end:
        count=count+phone_count(res+chr(97+start),inp[1:])
        start=start+1
    return count
    
    
    
print(phone_count("","12"))
