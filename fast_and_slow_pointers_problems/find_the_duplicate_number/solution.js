/**
 * this problem can be solved by fast and slow pointers--O(n)
 * space complexity--O(1)
 *
 * difficult part is
 * ------------------------------
 * visualizing this problem into linked list cycle is a quite
 * difficult part
 *
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  var slow = nums[0],
    fast = nums[0];
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow == fast) {
      var temp = nums[0];
      while (true) {
        if (temp == slow) {
          return slow;
        }
        temp = nums[temp];
        slow = nums[slow];
      }
    }
  }
};
