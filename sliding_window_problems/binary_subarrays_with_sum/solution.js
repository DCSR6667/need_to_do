/**
 * brute force approach--O(n2)
 * space complexity--O(1)
 *
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  var i = 0,
    total = 0;
  while (i < nums.length) {
    var j = i;
    var sum = 0;
    while (j < nums.length) {
      sum = sum + nums[j];
      if (sum > goal) {
        break;
      }
      if (sum == goal) {
        total = total + 1;
      }
      j += 1;
    }
    i += 1;
  }

  return total;
};

/**
 * this problem can be solved by sliding window pattern--O(2*2n)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

var helper = (nums, goal) => {
  if (goal < 0) {
    return 0;
  }
  var l = 0,
    r = 0,
    count = 0,
    sum = 0;
  while (r < nums.length) {
    sum = sum + nums[r];
    while (sum > goal) {
      sum = sum - nums[l];
      l += 1;
    }
    count = count + (r - l + 1);
    r += 1;
  }
  return count;
};

var numSubarraysWithSum = function (nums, goal) {
  return helper(nums, goal) - helper(nums, goal - 1);
};
