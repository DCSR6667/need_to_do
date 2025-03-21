/**
 * time complexity----O(n+n)
 * space complexity--O(n+n)
 *
 * logic is
 * ----------------
 * use a hashmap and store givennode as key and copied node as value
 * and then update next and random pointers of copied nodes in hash map
 *
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (head == null) {
    return head;
  }

  var hmap = new Map();
  var temp = head,
    newnode;
  while (temp != null) {
    newnode = new _Node(temp.val, null, null);
    hmap.set(temp, newnode);
    temp = temp.next;
  }
  temp = head;
  while (temp != null) {
    hmap.get(temp).next = temp.next ? hmap.get(temp.next) : null;
    hmap.get(temp).random = temp.random ? hmap.get(temp.random) : null;
    temp = temp.next;
  }

  return hmap.get(head);
};

/**
 * time complexity--O(n+n+n)
 * space complexity--O(n)
 *
 * idea
 * ----------------------
 * insert copy nodes in between
 * update random pointers
 * update next pointers
 *
 *
 *
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  //insert copy nodes in between
  var temp = head,
    newnode;
  while (temp != null) {
    newnode = new _Node(temp.val);
    newnode.next = temp.next;
    temp.next = newnode;
    temp = temp.next.next;
  }

  //update random pointers
  temp = head;
  while (temp != null) {
    temp.next.random = temp.random ? temp.random.next : temp.random;
    temp = temp.next.next;
  }

  //update next pointers
  temp = head;
  var dummy = new _Node(-1),
    tail = dummy;
  while (temp != null) {
    tail.next = temp.next;
    tail = tail.next;
    temp.next = tail.next;
    temp = temp.next;
  }
  return dummy.next;
};
