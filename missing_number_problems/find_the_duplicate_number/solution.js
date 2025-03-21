/**
 * this problem can be solved by cyclic sort pattern---O(n+n)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  var i = 0;
  var temp;
  while (i < nums.length) {
    var corpos = nums[i] - 1;
    if (corpos < 0 || corpos >= nums.length) {
      i += 1;
      continue;
    }
    if (nums[i] != nums[corpos]) {
      temp = nums[i];
      nums[i] = nums[corpos];
      nums[corpos] = temp;
    } else {
      i += 1;
    }
  }

  i = 0;
  while (i < nums.length) {
    if (nums[i] - i != 1) {
      return nums[i];
    }
    i += 1;
  }
};
