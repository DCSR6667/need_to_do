/**
 * time complexity---O(n2)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  var i = 0,
    res = 0;
  var max = Math.max(...nums);
  while (i < nums.length) {
    var j = i;
    var count_max = 0;
    while (j < nums.length) {
      if (nums[j] == max) {
        count_max += 1;
      }
      if (count_max >= k) {
        res += 1;
      }
      j += 1;
    }
    i += 1;
  }
  return res;
};

/**
 * this problem can be solved by sliding window problem--O(n+n)
 * space complexity---O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  var l = 0,
    r = 0,
    res = 0,
    count_max = 0,
    size = nums.length;
  var max_num = Math.max(...nums);
  while (r < size) {
    if (nums[r] == max_num) {
      count_max += 1;
    }

    while (count_max >= k) {
      res = res + (size - r);
      if (nums[l] == max_num) {
        count_max -= 1;
      }
      l += 1;
    }

    r += 1;
  }
  return res;
};
