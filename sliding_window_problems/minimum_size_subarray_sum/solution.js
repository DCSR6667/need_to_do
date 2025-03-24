/**
 * time complexity---O(n2)
 * space complexity--O(1)
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  var i = 0,
    min_length = Infinity;
  while (i < nums.length) {
    var j = i,
      sum = 0;
    while (j < nums.length) {
      sum = sum + nums[j];
      if (sum >= target) {
        if (j - i + 1 < min_length) {
          min_length = j - i + 1;
        }
        break;
      }
      j += 1;
    }
    i += 1;
  }
  return min_length == Infinity ? 0 : min_length;
};

/**
 * this problem can be solved by sliding window pattern--O(n+n)
 * space complexity--O(1)
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  var l = 0,
    r = 0,
    min_length = Infinity,
    sum = 0;
  while (r < nums.length) {
    sum = sum + nums[r];
    while (sum >= target) {
      if (r - l + 1 < min_length) {
        min_length = r - l + 1;
      }
      sum = sum - nums[l];
      l += 1;
    }
    r += 1;
  }
  return min_length == Infinity ? 0 : min_length;
};
