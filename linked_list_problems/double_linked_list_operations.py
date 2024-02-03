class node:
    def __init__(self,val):
        self.prev=None
        self.val=val
        self.next=None


class double_linked_list:
    def __init__(self):
        self.head=None
        self.tail=None
    def insertAtFirst(self,val):
        new=node(val)
        if self.head is None:
            self.head=new
            self.tail=new
        else:
            new.next=self.head
            self.head.prev=new
            self.head=new

    def display(self):
        temp=self.head
        while temp!=None:
            print(temp.val,end="-->")
            temp=temp.next

    def insertAtLast(self,val):
        new=node(val)
        if self.head is None:
            self.head=new
            self.tail=new
        else:
            self.tail.next=new
            new.prev=self.tail
            self.tail=new
        

    def length(self):
        temp=self.head
        count=0
        while temp!=None:
            count+=1
            temp=temp.next
        return count
    
    def insertAtLoc(self,loc,val):
        if loc==0:
            self.insertAtFirst(val)
        elif loc==self.length():
            self.insertAtLast(val)
        else:
            i=1
            new=node(val)
            temp=self.head
            while i<loc:
                temp=temp.next
                i+=1
            new.next=temp.next
            temp.next.prev=new
            new.prev=temp
            temp.next=new


    def deleteAtFirst(self):
        if self.head is None:
            print("we can't delete a node because linked list is empty")
        else:
            temp=self.head
            self.head=self.head.next
            temp.next.prev=None
            temp.next=None

    def deleteAtLast(self):
        if self.head is None:
            print("we can't delete a node because linked list is empty ")
        else:
            temp=self.tail.prev
            self.tail.prev=None
            temp.next=None
            self.tail=temp

    def deleteAtLoc(self,loc):
        if loc==0:
            self.deleteAtFirst()
        else:
            i=1
            dummy=None
            temp=self.head
            while i<=loc:
                dummy=temp
                temp=temp.next
                i+=1
            if temp is self.tail:
                self.tail=dummy
                temp.prev=None
                dummy.next=None
            else:
                temp.next.prev=dummy
                dummy.next=temp.next
                temp.next=None
                temp.prev=None
    


          


    

    

    

        
        

dll=double_linked_list()

dll.insertAtLoc(0,1)
dll.insertAtLoc(1,2)
dll.insertAtLoc(1,3)
dll.insertAtLoc(2,34)
dll.insertAtLoc(4,345)
dll.insertAtLoc(0,12)

dll.display()
print()

dll.deleteAtLoc(0)
dll.display()
print()
dll.deleteAtLoc(2)
dll.display()
print()
dll.deleteAtLoc(3)
dll.display()
print()
dll.deleteAtLoc(0)
dll.display()








