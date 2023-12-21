'''
this problem can be solved by brute force approach---O(n4)
'''


def fourSum(nums,target):
    i=0
    nums.sort()
    lt=[]
    st=set()
    while i<len(nums):
        j=i+1
        while j<len(nums):
            k=j+1
            while k<len(nums):
                l=k+1
                while l<len(nums):
                    if nums[i]+nums[j]+nums[k]+nums[l]==target:
                        s=str(nums[i])+" "+str(nums[j])+" "+str(nums[k])+" "+str(nums[l])
                        if s not in st:
                            st.add(s)
                            lt.append([nums[i],nums[j],nums[k],nums[l]])
                    l+=1
                k+=1
            j+=1
        i+=1
    return lt




'''
this problem can be solved by hashmap approach so that we can 
reduce searching time ---O(n3)
space---O(n)

'''


def fourSum(nums,target):
    i=0
    l=[]

    st=set()
    nums.sort()

    while i<len(nums):
        j=i+1
        while j<len(nums):
            k=j+1
            d={}
            while k<len(nums):
                if target-nums[i]-nums[j]-nums[k] in d.keys():
                    s=str(nums[i])+" "+str(nums[j])+" "+str(nums[k])+" "+str(target-nums[i]-nums[j]-nums[k])
                    if s not in st:
                        st.add(s)
                        l.append([nums[i],nums[j],nums[k],target-nums[i]-nums[j]-nums[k]])
                d[nums[k]]=k
                k+=1
            j+=1
        i+=1
    return l



'''
this problem can be solved by two pointers approach----O(n3)
space---O(1)

'''


def fourSum(nums,target):
    nums.sort()
    i=0
    lt=[]
    while i<len(nums):
        while i>0 and i<len(nums) and nums[i]==nums[i-1]:
            i+=1

        j=i+1
        while j<len(nums):
            while j>i+1 and j<len(nums) and nums[j]==nums[j-1]:
                j+=1
            

            l=j+1
            h=len(nums)-1
            while l<h:
                if nums[i]+nums[j]+nums[l]+nums[h]==target:
                    lt.append([nums[i],nums[j],nums[l],nums[h]])
                    
                    while l<h and nums[l]==nums[l+1]:
                        l+=1
                    l+=1
                    while l<h and nums[h]==nums[h-1]:
                        h-=1
                    h-=1
                elif nums[i]+nums[j]+nums[l]+nums[h]>target:
                    h-=1
                else:
                    l+=1
            j+=1
        i+=1
    
    return lt

        
