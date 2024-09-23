
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
 }

var MyLinkedList = function() {
   this.dummy=new ListNode();
   

   
};

/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
   var temp=this.dummy;
   var i=0;
   while(temp!=null && i<=index)
   {
       temp=temp.next;
       i+=1;
   }
   if(temp==null)
   {
       return -1;
   }
   return temp.val;


   
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
   var new_node=new ListNode(val);
   new_node.next=this.dummy.next;
   this.dummy.next=new_node;
   
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
   var temp=this.dummy;
   while(temp.next!=null)
   {
       temp=temp.next;
   }
   var new_node=new ListNode(val);
   temp.next=new_node;
  
   
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
   var i=0;
   var temp=this.dummy;
   while(temp!=null && i<index)
   {
       temp=temp.next;
       i+=1;
   }
   if(temp!=null)
   {
       var new_node=new ListNode(val);
       new_node.next=temp.next;
       temp.next=new_node;

   }
   
   
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
   var i=0;
   var temp=this.dummy;
   while(i<index)
   {
       temp=temp.next;
       i+=1;
   }
   if(temp!=null && temp.next!=null)
   {
       temp.next=temp.next.next;

   }
  
   
};

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/