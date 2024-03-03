'''
this problem can be solved by bitwise operators
'''

class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        for i in image:
            l=0
            h=len(i)-1
            while l<h:
                i[l],i[h]=i[h],i[l]
                i[l]=i[l]^1
                i[h]=i[h]^1
                l+=1
                h-=1
            if l is h:
                i[l]=i[l]^1
        return image
