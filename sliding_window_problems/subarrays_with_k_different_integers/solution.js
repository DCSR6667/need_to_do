/**
 * brute force approach---O(n2)
 * space complexity--O(k)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  var i = 0,
    count = 0;
  while (i < nums.length) {
    var j = i;
    var hs = new Set();
    while (j < nums.length) {
      if (!hs.has(nums[j])) {
        hs.add(nums[j]);
      }
      if (hs.size > k) {
        break;
      }
      if (hs.size == k) {
        count = count + 1;
      }
      j += 1;
    }
    i += 1;
  }
  return count;
};

/**
 * this problem can be solved by sliding window pattern--O(2*2n)
 * space complexity---O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var helper = (nums, k) => {
  if (k < 0) {
    return 0;
  }
  var l = 0,
    r = 0,
    count = 0,
    hm = new Map();
  while (r < nums.length) {
    hm.set(nums[r], (hm.get(nums[r]) || 0) + 1);
    while (hm.size > k) {
      hm.set(nums[l], hm.get(nums[l]) - 1);
      if (hm.get(nums[l]) == 0) {
        hm.delete(nums[l]);
      }
      l += 1;
    }
    count = count + (r - l + 1);
    r += 1;
  }
  return count;
};

var subarraysWithKDistinct = function (nums, k) {
  return helper(nums, k) - helper(nums, k - 1);
};
