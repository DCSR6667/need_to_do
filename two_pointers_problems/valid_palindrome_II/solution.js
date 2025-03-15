/**
 * this problem can be solved by two pointers--O(n)
 * @param {string} s
 * @return {boolean}
 */

var ispalindrome = (s, low, high) => {
  while (low < high) {
    if (s[low] != s[high]) {
      return false;
    }
    low += 1;
    high -= 1;
  }
  return true;
};

var validPalindrome = function (s) {
  var low = 0;
  var high = s.length - 1;
  while (low < high) {
    if (s[low] == s[high]) {
      low += 1;
      high -= 1;
      continue;
    }
    if (ispalindrome(s, low + 1, high) || ispalindrome(s, low, high - 1)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
