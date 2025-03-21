/**
 * brute force approach---0(n2)
 * space complexity--O(n)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  var i = 0,
    longest = 0,
    no_of_replacements;
  while (i < s.length) {
    var j = i;
    var hm = new Map();
    while (j < s.length) {
      if (!hm.has(s[j])) {
        hm.set(s[j], 1);
      } else {
        hm.set(s[j], hm.get(s[j]) + 1);
      }

      no_of_replacements = j - i + 1 - Math.max(...hm.values());
      if (no_of_replacements > k) {
        break;
      }

      if (j - i + 1 > longest) {
        longest = j - i + 1;
      }
      j += 1;
    }
    i += 1;
  }
  return longest;
};

/**
 * this problem can be solved by sliding window pattern--O(n+n)
 * space complexity--O(n)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  var l = 0,
    r = 0,
    no_of_replacements = 0,
    longest = 0;
  var hm = new Map();
  while (r < s.length) {
    if (!hm.has(s[r])) {
      hm.set(s[r], 1);
    } else {
      hm.set(s[r], hm.get(s[r]) + 1);
    }

    no_of_replacements = r - l + 1 - Math.max(...hm.values());
    while (no_of_replacements > k) {
      hm.set(s[l], hm.get(s[l]) - 1);
      if (hm.get(s[l]) == 0) {
        hm.delete(s[l]);
      }
      l += 1;
      no_of_replacements = r - l + 1 - Math.max(...hm.values());
    }
    if (r - l + 1 > longest) {
      longest = r - l + 1;
    }
    r += 1;
  }
  return longest;
};

/**
 * this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(n)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  var l = 0,
    r = 0,
    no_of_replacements = 0,
    longest = 0;
  var hm = new Map();
  while (r < s.length) {
    if (!hm.has(s[r])) {
      hm.set(s[r], 1);
    } else {
      hm.set(s[r], hm.get(s[r]) + 1);
    }

    no_of_replacements = r - l + 1 - Math.max(...hm.values());
    if (no_of_replacements > k) {
      hm.set(s[l], hm.get(s[l]) - 1);
      if (hm.get(s[l]) == 0) {
        hm.delete(s[l]);
      }
      l += 1;
      no_of_replacements = r - l + 1 - Math.max(...hm.values());
    }

    if (no_of_replacements <= k) {
      if (r - l + 1 > longest) {
        longest = r - l + 1;
      }
    }

    r += 1;
  }
  return longest;
};
