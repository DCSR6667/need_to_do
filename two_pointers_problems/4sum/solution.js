/**
 * this problem can be solved by brute force appraoch--O(n4+nlogn)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  var res = [];
  nums.sort((a, b) => a - b);
  var i = 0;
  while (i < nums.length) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      i += 1;
      continue;
    }
    var j = i + 1;
    while (j < nums.length) {
      if (j - i > 1 && nums[j] == nums[j - 1]) {
        j += 1;
        continue;
      }
      var k = j + 1;
      while (k < nums.length) {
        if (k - j > 1 && nums[k] == nums[k - 1]) {
          k += 1;
          continue;
        }
        var l = k + 1;
        while (l < nums.length) {
          if (l - k > 1 && nums[l] == nums[l - 1]) {
            l += 1;
            continue;
          }

          if (nums[i] + nums[j] + nums[k] + nums[l] == target) {
            res.push([nums[i], nums[j], nums[k], nums[l]]);
          }
          l += 1;
        }

        k += 1;
      }

      j += 1;
    }

    i += 1;
  }

  return res;
};

/**
 * this problem can be solved by hashset---O(nlogn+n3*hashsearch+no_of_quads*4)
 * space complexity--O(n+no_of_quads*3);
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  var i = 0;
  var res = new Set();
  while (i < nums.length) {
    var j = i + 1;

    while (j < nums.length) {
      var k = j + 1;
      var hs = new Set();
      while (k < nums.length) {
        if (hs.has(target - nums[i] - nums[j] - nums[k])) {
          res.add(
            nums[i] +
              " " +
              nums[j] +
              " " +
              nums[k] +
              " " +
              (target - nums[i] - nums[j] - nums[k])
          );
        }
        hs.add(nums[k]);
        k += 1;
      }

      j += 1;
    }
    i += 1;
  }

  var final = [...res].map((str) => {
    return str.split(" ").map((num) => +num);
  });
  return final;
};

/**
 * this problem can be solved by two pointers approach--O(n3+nlogn)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  var res = [];
  var i = 0;
  while (i < nums.length) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      i += 1;
      continue;
    }

    var j = i + 1;
    while (j < nums.length) {
      if (j - i > 1 && nums[j] == nums[j - 1]) {
        j += 1;
        continue;
      }
      var low = j + 1;
      var high = nums.length - 1;
      while (low < high) {
        if (low - j > 1 && nums[low] == nums[low - 1]) {
          low += 1;
          continue;
        }
        if (high < nums.length - 1 && nums[high] == nums[high + 1]) {
          high -= 1;
          continue;
        }
        var sum = nums[i] + nums[j] + nums[low] + nums[high];
        if (sum == target) {
          res.push([nums[i], nums[j], nums[low], nums[high]]);
          low += 1;
          high -= 1;
        } else if (sum > target) {
          high -= 1;
        } else {
          low += 1;
        }
      }
      j += 1;
    }

    i += 1;
  }
  return res;
};
