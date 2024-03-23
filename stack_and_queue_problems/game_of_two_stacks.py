'''
this problem can be solved by using recursion

'''

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'twoStacks' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER maxSum
#  2. INTEGER_ARRAY a
#  3. INTEGER_ARRAY b
#

def helper(maxSum,a,b,s,count):
    if s>maxSum:
        return count
    if len(a)==0 or len(b)==0:
        return count
    count1=helper(maxSum, a[1:], b, s+a[0], count+1)
    count2=helper(maxSum, a,b[1:], (s+b[0]), (count+1))
    if count1>count2:
        return count1
    else:
        return count2

def twoStacks(maxSum, a, b):
    # Write your code here
    return helper(maxSum, a, b, 0, 0)-1
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    g = int(input().strip())

    for g_itr in range(g):
        first_multiple_input = input().rstrip().split()

        n = int(first_multiple_input[0])

        m = int(first_multiple_input[1])

        maxSum = int(first_multiple_input[2])

        a = list(map(int, input().rstrip().split()))

        b = list(map(int, input().rstrip().split()))

        result = twoStacks(maxSum, a, b)

        fptr.write(str(result) + '\n')

    fptr.close()
