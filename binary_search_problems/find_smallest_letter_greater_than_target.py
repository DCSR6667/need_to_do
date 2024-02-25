'''
this problem can be solved by binary search---O(logn)
'''

class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        low=0
        high=len(letters)-1
        while low<=high:
            mid=(low+high)//2
            if target<letters[mid]:
                high=mid-1
            else:
                low=mid+1
        if low==len(letters):
            return letters[0]
        else:
            return letters[low]
        