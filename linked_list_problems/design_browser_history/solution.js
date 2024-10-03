function ListNode(val,prev, next) {
    this.val = (val===undefined ? 0 : val)
   this.prev = (prev===undefined ? null : prev)
    this.next = (next===undefined ? null : next)
 }

/**
* @param {string} homepage
*/
var BrowserHistory = function(homepage) {
   this.temp=new ListNode(homepage);
  
   
};

/** 
 * time complexity--O(1)
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function(url) {
   var new_node=new ListNode(url);
   this.temp.next=new_node;
   new_node.prev=this.temp;
   this.temp=new_node;
   
   
};

/** 
 * time complexity--O(len_of_linked_list)
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
   var i=1;
   while(this.temp.prev!=null && i<=steps)
   {
       this.temp=this.temp.prev
       i+=1;
   }
   
   
   return this.temp.val;

   
};

/** 
 * time complexity--O(len_of_linked_list)
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
   var i=1;
   while(this.temp.next!=null && i<=steps)
   {
       this.temp=this.temp.next;
       i+=1;
   }
   return this.temp.val;
   

   
};

/** 
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/