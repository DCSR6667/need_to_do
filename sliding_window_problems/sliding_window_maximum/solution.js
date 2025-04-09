/**
 * time complexity--O(n2)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  var res = [];
  var i = 0;
  while (i <= nums.length - k) {
    var j = i,
      size = j + k,
      max = -Infinity;
    while (j < size) {
      if (nums[j] > max) {
        max = nums[j];
      }
      j += 1;
    }
    res.push(max);
    i += 1;
  }
  return res;
};
