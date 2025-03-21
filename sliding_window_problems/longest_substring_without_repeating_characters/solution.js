/**
 * brute force approach---O(n2)
 * space complexity--O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var i = 0,
    longest = 0;
  while (i < s.length) {
    var j = i;
    var st = new Set();
    while (j < s.length) {
      if (!st.has(s[j])) {
        st.add(s[j]);
        if (j - i + 1 > longest) {
          longest = j - i + 1;
        }
        j += 1;
      } else {
        break;
      }
    }
    i += 1;
  }
  return longest;
};

/**
 * this problem can be solved by using sliding window--O(n+n)
 * space complexity---O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var l = 0,
    r = 0,
    longest = 0;
  var hs = new Set();
  while (r < s.length) {
    while (hs.has(s[r])) {
      hs.delete(s[l]);
      l += 1;
    }

    hs.add(s[r]);
    if (r - l + 1 > longest) {
      longest = r - l + 1;
    }
    r += 1;
  }

  return longest;
};

/**
 * this problem can be solved by using sliding window--O(n)
 * space complexity---O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var l = 0,
    r = 0,
    longest = 0;
  var hm = new Map();
  while (r < s.length) {
    if (hm.has(s[r])) {
      if (hm.get(s[r]) >= l) {
        l = hm.get(s[r]) + 1;
      }
    }

    if (r - l + 1 > longest) {
      longest = r - l + 1;
    }
    hm.set(s[r], r);
    r += 1;
  }
  return longest;
};
