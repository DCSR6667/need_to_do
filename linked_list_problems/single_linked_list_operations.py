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


    def deleteAtFirst(self):

        if self.head is None:
            print("we can't perform delete operations because linked list is empty")
        else:
            temp=self.head
            self.head=self.head.next
            temp.next=None

    def deleteAtLast(self):
        temp=self.head
        if self.head is None:
            print("we can't delete a node because linked list is empty")
            return
        while temp.next!=self.tail:
            temp=temp.next
        self.tail=temp
        temp.next=None



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
sll.insertAtFirst(10)
sll.insertAtFirst(20)
sll.insertAtFirst(10)
sll.insertAtFirst(20)

sll.display()
print()
sll.deleteAtLast()
sll.deleteAtLast()
sll.deleteAtLast()
sll.deleteAtLast()
sll.deleteAtLast()
sll.deleteAtLast()
sll.deleteAtLast()
sll.display()



