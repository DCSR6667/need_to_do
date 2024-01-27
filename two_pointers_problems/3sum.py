'''
this problem can be solved by brute force approach---O(n3)
'''


def threeSum(nums):
    l=[]
    l1=[]
    i=0
    nums.sort()
    while i<len(nums):
        j=i+1
        while j<len(nums):
            k=j+1
            while k<len(nums):
                if nums[i]+nums[j]+nums[k]==0:
                    s=str(nums[i])+" "+str(nums[j])+" "+str(nums[k])
                    if s not in l1:
                        l1.append(s)
                        l.append([nums[i],nums[j],nums[k]])
                k+=1
            j+=1
        i+=1
    return l



'''
this problem can be solved by hashmap approach so that we can 
reduce searching time ---O(n2)
space---O(n)

'''

def threeSum(nums):
    l=[]
    nums.sort()
    st=set()
    i=0
    while i<len(nums):
        j=i+1
        d={}
        while j<len(nums):
            if -nums[i]-nums[j] in d.keys():
                s=str(nums[i])+" "+str(nums[j])+" "+str(-nums[i]-nums[j])
                if s not in st:
                    st.add(s)
                    l.append([nums[i],nums[j],-nums[i]-nums[j]])
            d[nums[j]]=j
            
            j+=1
        i+=1
    return l


'''
this problem can be solved by two pointers approach---O(n2)
space--O(1)

'''



def threeSum(nums):
    i=0
    nums.sort()
    l=[]
    while i<len(nums):
        while i>0 and i<len(nums) and nums[i]==nums[i-1]:
            i+=1

        j=i+1
        k=len(nums)-1
        while j<k:
            if nums[i]+nums[j]+nums[k]==0:
                l.append([nums[i],nums[j],nums[k]])
                j+=1
                k-=1

                while j<k and nums[j]==nums[j-1]:
                    j+=1
                
                while j<k and nums[k]==nums[k+1]:
                    k-=1
               
            elif nums[i]+nums[j]+nums[k]>0:
                k-=1
            else:
                j+=1
            
        i+=1
    return l
