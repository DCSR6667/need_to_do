/**
 * //this problem can be converted into binary_subarrays_with_sum
 * brute force approach--O(n2)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  var i = 0,
    total = 0;
  while (i < nums.length) {
    var j = i;
    var sum = 0;
    while (j < nums.length) {
      sum = sum + (nums[j] % 2);
      if (sum > k) {
        break;
      }
      if (sum == k) {
        total = total + 1;
      }
      j += 1;
    }
    i += 1;
  }

  return total;
};

/**
 *
 * this problem can be converted into binary_subarrays_with_sum
 * this problem can be solved by sliding window pattern--O(2*2n)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var helper = (nums, k) => {
  var l = 0,
    r = 0,
    count = 0,
    sum = 0;
  while (r < nums.length) {
    sum = sum + (nums[r] % 2);
    while (sum > k) {
      sum = sum - (nums[l] % 2);
      l += 1;
    }
    count = count + (r - l + 1);
    r += 1;
  }
  return count;
};

var numberOfSubarrays = function (nums, k) {
  return helper(nums, k) - helper(nums, k - 1);
};
