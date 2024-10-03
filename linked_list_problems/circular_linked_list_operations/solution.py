class node:
    def __init__(self,val):
        self.val=val
        self.next=None

    
class circular_linked_list:
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
            self.head=new
            self.tail.next=self.head


    def insertAtLast(self,val):
        new=node(val)
        if self.head is None:
            self.head=new
            self.tail=new
        else:
            self.tail.next=new
            new.next=self.head
            self.tail=new

    def insertAtLoc(self,loc,val):
        if loc==0:
            self.insertAtFirst(val)
        elif loc==self.length():
            self.insertAtLast(val)
        else:
            new=node(val)
            temp=self.head
            i=1
            while i<loc:
                temp=temp.next
                i+=1
            new.next=temp.next
            temp.next=new


    def deleteAtFirst(self):
        if self.head is None:
            print("we can't delete a node because linked list is empty")
        elif self.head is self.tail:
            self.head=None
            self.tail=None
        else:
            temp=self.head
            self.head=self.head.next
            temp.next=None
            self.tail.next=self.head

    def deleteAtLast(self):
        if self.head is None:
            print("we can't delete a node because linked list is empty")
        elif self.head is self.tail:
            self.head=None
            self.tail=None
        else:
            temp=self.head
            while temp.next is not self.tail:
                temp=temp.next
            self.tail.next=None
            self.tail=temp
            self.tail.next=self.head

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
            dummy.next=temp.next
            temp.next=None
            if temp is self.tail:
                self.tail=dummy

        


    
    def length(self):
        count=0
        temp=self.head
        if self.head is None:
            return count
        while temp is not self.tail:
            count+=1
            temp=temp.next
        return count+1


    def display(self):
        if self.head is None:
            print("linked list is empty")
        else:
            temp=self.head
            while temp is not self.tail:
                print(temp.val,end="-->")
                temp=temp.next
            print(temp.val,end="-->")




cll=circular_linked_list()
cll.insertAtLoc(0,1)
cll.insertAtLoc(1,2)
cll.insertAtLoc(1,5)
cll.insertAtLoc(2,10)
cll.insertAtLoc(1,100)
cll.display()
print()
cll.deleteAtLoc(0)
cll.display()
print()
cll.deleteAtLoc(2)
cll.display()
print()
cll.deleteAtLoc(2)
cll.display()
print()
cll.deleteAtLoc(0)
cll.display()

