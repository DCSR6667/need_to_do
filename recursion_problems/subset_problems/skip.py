def skip(p,up):
    if len(up)==0:
        return p
    if up[0]!='a':
        p=p+up[0]
    return skip(p,up[1:])


def skip1(up):
    if len(up)==0:
        return ""
    if up[0]!='a':
        p=up[0]
    else:
        p=""
    resfrombelow=skip1(up[1:])
    return p+resfrombelow

def skipApple(up):
    if len(up)==0:
        return ""
    if up.startswith("apple"):
        ch=""
        resfrombelow=skipApple(up[5:])
    else:
        ch=up[0]
        resfrombelow=skipApple(up[1:])
    return ch+resfrombelow


def skipAppNotApple(up):
    if len(up)==0:
        return ""
    if up.startswith("app") and not(up.startswith("apple")):
        ch=""
        resfrombelow=skipAppNotApple(up[3:])
    else:
        ch=up[0]
        resfrombelow=skipAppNotApple(up[1:])
    return ch+resfrombelow
    
    


print(skipAppNotApple("appledsfdnsfappledsfjjapp"))