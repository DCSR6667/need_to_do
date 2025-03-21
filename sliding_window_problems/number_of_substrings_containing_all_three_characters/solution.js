/**
 * brute force approach---O(n2)
 * space complexity---O(1)
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  var i = 0,
    count = 0,
    size = s.length;
  while (i < s.length) {
    var j = i;
    var hs = new Set();
    while (j < s.length) {
      if (!hs.has(s[j])) {
        hs.add(s[j]);
      }
      if (hs.size == 3) {
        count = count + (size - j);
        break;
      }
      j += 1;
    }
    i += 1;
  }
  return count;
};

/**
 * logic---
 * if i found minimum substring  (this can be done by hashmap with indexes)
 * then count=count+(lowest index among three chars+1)
 *
 *
 * this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(1)
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  var l = 0,
    r = 0,
    count = 0;
  var hm = new Map();
  while (r < s.length) {
    hm.set(s[r], r);
    if (hm.get("a") >= 0 && hm.get("b") >= 0 && hm.get("c") >= 0) {
      count = count + Math.min(...hm.values()) + 1;
    }

    r += 1;
  }
  return count;
};
