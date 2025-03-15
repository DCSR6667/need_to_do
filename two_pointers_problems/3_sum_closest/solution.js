// VISIT PYTHON  CODE FOR BETTER UNDERSTANDING

/**
 * this problem can be solved by brute force approach--O(n3)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var min_dis = Infinity;
  var ans;
  var i = 0;
  var distance;
  while (i < nums.length) {
    var j = i + 1;
    while (j < nums.length) {
      var k = j + 1;
      while (k < nums.length) {
        var distance = Math.abs(target - (nums[i] + nums[j] + nums[k]));
        if (distance < min_dis) {
          min_dis = distance;
          ans = nums[i] + nums[j] + nums[k];
        }
        k += 1;
      }
      j += 1;
    }

    i += 1;
  }

  return ans;
};

/**
 * this problem can be solved by two pointers approach---O(n2+nlogn)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var i = 0;
  var closest_sum,
    min_dis = Infinity,
    dis;
  nums.sort((a, b) => a - b);
  while (i < nums.length) {
    var low = i + 1;
    var high = nums.length - 1;
    while (low < high) {
      var sum = nums[i] + nums[low] + nums[high];

      if (sum === target) {
        return sum;
      }
      if (sum > target) {
        dis = Math.abs(target - sum);
        if (dis < min_dis) {
          min_dis = dis;
          closest_sum = sum;
        }

        high -= 1;
      } else {
        dis = Math.abs(target - sum);
        if (dis < min_dis) {
          min_dis = dis;
          closest_sum = sum;
        }
        low += 1;
      }
    }
    i += 1;
  }
  return closest_sum;
};
