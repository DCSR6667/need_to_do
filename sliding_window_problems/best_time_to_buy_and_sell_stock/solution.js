/**
 * time complexity--O(n2)
 * space complexity--O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var i = 0,
    max_profit = 0;
  var size = prices.length;
  while (i < size) {
    var j = i + 1;
    while (j < size) {
      if (prices[j] - prices[i] > max_profit) {
        max_profit = prices[j] - prices[i];
      }
      j += 1;
    }
    i += 1;
  }
  return max_profit;
};

/**
 * this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var l = 0,
    r = 0,
    profit,
    max_profit = 0;
  while (r < prices.length) {
    profit = prices[r] - prices[l];
    if (profit < 0) {
      l = r;
    }
    if (profit > max_profit) {
      max_profit = profit;
    }
    r += 1;
  }
  return max_profit;
};
