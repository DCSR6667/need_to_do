class node:
    def __init__(self,val):
        self.val=val
        self.next=None

class single_linked_list:
    def __init__(self):
        self.head=None
        self.tail=None

    def insertAtLast(self,val):
        new=node(val)
        if self.head is None:
            self.head=new
            self.tail=new
        else:
            self.tail.next=new
            self.tail=new

    def insertAtFirst(self,val):
        new=node(val)
        if self.head is None:
            self.head=new
            self.tail=new
        else:
            new.next=self.head
            self.head=new


    def insertAtLocation(self,loc,val):

        if loc==0:
            self.insertAtFirst(val)
        elif loc==self.length():
            self.insertAtLast(val)
        else:
            i=1
            temp=self.head
            while i<loc:
                temp=temp.next
                i+=1
            new=node(val)
            new.next=temp.next
            temp.next=new
        

    
    

    def length(self):
        temp=self.head
        count=0
        while temp:
            count+=1
            temp=temp.next
        return count
        
    
    def display(self):
        temp=self.head
        if temp is None:
            print("linked list is empty")
        
        while temp:
            print(temp.val,end="-->")
            temp=temp.next
    
        
    
sll=single_linked_list()
sll.insertAtFirst(10)
sll.insertAtFirst(20)
sll.insertAtFirst(30)
sll.insertAtFirst(40)
sll.insertAtLast(50)
sll.insertAtLast(60)
sll.insertAtLocation(0,-1)
sll.insertAtLocation(7,70)
sll.insertAtLocation(2,29)
sll.display()



