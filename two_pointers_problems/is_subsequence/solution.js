/**
 * this problem can be solved by brute force approach---O(n*m)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var linear_search = (chr, low, t) => {
  while (low < t.length) {
    if (t[low] == chr) {
      return low + 1;
    }
    low += 1;
  }
  return -1;
};
var isSubsequence = function (s, t) {
  var i = 0;
  var index = 0;
  while (i < s.length) {
    index = linear_search(s[i], index, t);
    if (index == -1) {
      return false;
    }
    i += 1;
  }
  return true;
};

/**
 * this problem can be solved by two pointers approach---O(m+n)
 * space complexity--O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  var i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i += 1;
      j += 1;
    } else {
      j += 1;
    }
  }

  if (i < s.length) {
    return false;
  } else {
    return true;
  }
};
