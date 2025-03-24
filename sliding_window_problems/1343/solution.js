/**
 * brute force approach--O(n2)
 * space complexity--O(1)
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  var i = 0,
    count = 0;
  while (i <= arr.length - k) {
    var j = i,
      sum = 0,
      avg;
    while (j < arr.length) {
      if (j - i + 1 > k) {
        break;
      }
      sum = sum + arr[j];
      if (j - i + 1 == k) {
        avg = Math.floor(sum / k);
        if (avg >= threshold) {
          count = count + 1;
        }
      }
      j += 1;
    }
    i += 1;
  }
  return count;
};

/**
 * this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(1)
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  var l = 0,
    r = 0,
    count = 0,
    sum = 0,
    avg;
  while (r < arr.length) {
    sum = sum + arr[r];
    if (r - l + 1 > k) {
      sum = sum - arr[l];
      l += 1;
    }

    if (r - l + 1 == k) {
      avg = sum / k;
      if (avg >= threshold) {
        count += 1;
      }
    }
    r += 1;
  }

  return count;
};
