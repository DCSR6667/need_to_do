/**
 * this problem can be solved by two pointers approach--O(2k)
 * space complexity--O(1)
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  var i = 0,
    sum = 0;
  while (i < k) {
    sum = sum + cardPoints[i];
    i += 1;
  }
  var max_sum = sum;
  var j = k - 1,
    m = cardPoints.length - 1;
  while (j >= 0) {
    sum = sum - cardPoints[j];
    sum = sum + cardPoints[m];
    if (sum > max_sum) {
      max_sum = sum;
    }
    j -= 1;
    m -= 1;
  }
  return max_sum;
};
