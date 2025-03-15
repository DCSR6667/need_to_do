/**
 * this problem can be solved by brute force approach
 * time complexity-----O(n3+nlogn)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
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
        if (nums[i] + nums[j] + nums[k] == 0) {
          res.push([nums[i], nums[j], nums[k]]);
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
 * this problem can be solved by  hashset---O(nlogn+n2*hashsearch+no_of_triplets*3)
 * space complexity--O(n+no_of_triplets*3)
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  var i = 0;
  var res = new Set();

  while (i < nums.length) {
    var j = i + 1;
    var hs = new Set();
    while (j < nums.length) {
      if (hs.has(-nums[i] - nums[j])) {
        res.add(nums[i] + " " + nums[j] + " " + (-nums[i] - nums[j]));
      }
      hs.add(nums[j]);

      j += 1;
    }
    i += 1;
  }
  console.log(res);
  var final = [...res].map((str) => {
    return str.split(" ").map((num) => +num);
  });
  return final;
};

/**
 * this problem can be solved by two pointers approach--O(nlogn+n2)
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  var res = [];
  var i = 0;
  while (i < nums.length) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      i += 1;
      continue;
    }
    var low = i + 1;
    var high = nums.length - 1;
    while (low < high) {
      if (low - i > 1 && nums[low] == nums[low - 1]) {
        low += 1;
        continue;
      }
      if (high < nums.length - 1 && nums[high] == nums[high + 1]) {
        high -= 1;
        continue;
      }
      var sum = nums[i] + nums[low] + nums[high];
      if (sum == 0) {
        res.push([nums[i], nums[low], nums[high]]);
        low += 1;
        high -= 1;
      } else if (sum > 0) {
        high -= 1;
      } else {
        low += 1;
      }
    }
    i += 1;
  }
  return res;
};
