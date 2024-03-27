class heap:
    def __init__(self,l=[]):
        self.h=l
        self.size=0
        
    def getparentindex(self,i):
        return (i-1)//2
    
    def getleftchildindex(self,i):
        return  2*i+1
    
    def getrightchildindex(self,i):
        return 2*i+2
    
    
    #time--O(logn)
    def upheap(self,ele):
        self.h.append(ele)
        self.size=self.size+1
        i=self.size-1
        while i>0:
            p=self.getparentindex(i)
            if self.h[i]>self.h[p]:
                self.h[i],self.h[p]=self.h[p],self.h[i]
            else:
                break
            i=p
   
            
    #time---O(logn)
    def downheap(self):
        if self.size==0:
            print("we can't peform delete operation because heap is empty")
            
            return -1
        x=self.h[0]
        self.h[0]=self.h[self.size-1]
        i=0
        l=self.getleftchildindex(i)
        r=self.getrightchildindex(i)
       
        while l<self.size-1:
            
            if self.h[l]>self.h[r]:
                child=l
            else:
                child=r
                
            if self.h[child]>self.h[i]:
                self.h[child],self.h[i]=self.h[i],self.h[child]
                i=child
                l=self.getleftchildindex(i)
                r=self.getrightchildindex(i)
            else:
                break
            
        self.h[self.size-1]=x
        self.size=self.size-1
        return x
    
    #time---O(n)         
    def display(self):
        if self.size==0:
            print("heap is empty")
        else:
            i=0
            while i<self.size:
                print(self.h[i],end="-->")
                i+=1
                
    #time---O(nlogn)
    def heapsort(self,l):
        #creation of heap
        i=0
        while i<len(l):
            self.upheap(l[i])
            i+=1
            
        #deletion of heap
        i=0
        new=[]
        while self.size>0:
            new.append(self.downheap())
            
        return new
    
    #time--O(logn)
    def downheap1(self,i):
        l=self.getleftchildindex(i)
        r=self.getrightchildindex(i)
        while l<len(self.h):
            if r>=len(self.h):
                child=l
            elif self.h[l]>self.h[r]:
                child=l
            else:
                child=r
                
            if self.h[child]>self.h[i]:
                self.h[child],self.h[i]=self.h[i],self.h[child]
                i=child
                l=self.getleftchildindex(i)
                r=self.getrightchildindex(i)
            else:
                break
            
            
    def getpriorityelememt(self):
        if self.size==0:
            print("heap is empty ")
        else:
            return self.h[0]
            
        
            
            
    #timee--O(n)
    def heapify(self):
        s=len(self.h)-1
        i=s//2
        while i>=0:
            self.downheap1(i)
            i-=1
            
        self.size=len(self.h)
        
        
       
        
        
    
    
# hp=heap()
# hp.upheap(10)
# hp.upheap(20)
# hp.upheap(30)
# hp.upheap(40)
# hp.upheap(50)
# hp.upheap(60)

# print("deleted",hp.downheap())
# print(hp.size)

# print("deleted",hp.downheap())
# print(hp.size)

# print("deleted",hp.downheap())
# print(hp.size)

# print("deleted",hp.downheap())
# print(hp.size)

# print("deleted",hp.downheap())
# print(hp.size)

# print("deleted",hp.downheap())
# print(hp.size)

# print("deleted",hp.downheap())
# print(hp.size)

# hp=heap()
# l=[5,2,5,7,8,9,2]
# print(hp.heapsort(l))
# hp.display()

hp=heap([4,1,3,2,7,9,10,14,8,16,23,45,19])
hp.heapify()
print(hp.getpriorityelememt())

hp.display()


            
        