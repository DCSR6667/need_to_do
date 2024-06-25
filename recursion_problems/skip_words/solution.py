def skipword(s, res, word):
    if len(s) == 0:
        return res
    if not s.startswith(word):
        res += s[0]
        return skipword(s[1:], res, word)
    else:
        return skipword(s[len(word):], res, word)


def skipword1(s, word):
    res = ""
    if len(s) == 0:
        return res
    if not s.startswith(word):
        res += s[0]
        res_from_below = skipword1(s[1:], word)
    else:
        res_from_below = skipword1(s[len(word):], word)
    
    return res + res_from_below


print(skipword1("applechandraapple", "apple"))
