/**
 * this problem can be solved by two pointers approach--O(n)
 *
 * idea
 *
 * i represents the position where unique ele should insert
 * j represents the unique element which needs to be inserted in that pos
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var i = 0,
    j = 1;
  while (j < nums.length) {
    if (nums[i] == nums[j]) {
      j += 1;
      continue;
    }

    i += 1;
    nums[i] = nums[j];
    j += 1;
  }
  return i + 1;
};
