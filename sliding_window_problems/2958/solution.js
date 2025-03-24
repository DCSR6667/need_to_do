/**
 * brute force approach ---O(n2)
 * space complexity--O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  var i = 0,
    max_length = 0,
    max;
  while (i < nums.length) {
    var j = i;
    var hm = new Map();
    while (j < nums.length) {
      hm.set(nums[j], (hm.get(nums[j]) || 0) + 1);

      if (hm.get(nums[j]) > k) {
        break;
      }

      if (j - i + 1 > max_length) {
        max_length = j - i + 1;
      }
      j += 1;
    }
    i += 1;
  }
  return max_length;
};

/**
 * this problem can be solved by sliding window pattern--O(n+n)
 * space complexity--O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  var l = 0,
    r = 0,
    max_length = 0;
  var hm = new Map();
  while (r < nums.length) {
    hm.set(nums[r], (hm.get(nums[r]) || 0) + 1);

    while (hm.get(nums[r]) > k) {
      hm.set(nums[l], hm.get(nums[l]) - 1);
      if (hm.get(nums[l]) == 0) {
        hm.delete(nums[l]);
      }
      l = l + 1;
    }
    if (r - l + 1 > max_length) {
      max_length = r - l + 1;
    }
    r += 1;
  }
  return max_length;
};
