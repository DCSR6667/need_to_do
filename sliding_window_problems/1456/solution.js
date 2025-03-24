/**
 * brute force approach---O(n2)
 * space complexity--O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var is_vowel = (chr) => {
  if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u") {
    return true;
  } else {
    return false;
  }
};
var maxVowels = function (s, k) {
  var i = 0,
    max_vowels = 0;
  while (i < s.length) {
    var j = i;
    var count = 0;
    while (j < s.length) {
      if (j - i + 1 > k) {
        break;
      }
      if (is_vowel(s[j])) {
        count += 1;
      }
      if (j - i + 1 == k) {
        if (count > max_vowels) {
          max_vowels = count;
        }
      }

      j += 1;
    }
    i += 1;
  }
  return max_vowels;
};

/**
 * this problem can be solved by sliding window pattern---O(n)
 * space complexity--O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var is_vowel = (chr) => {
  if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u") {
    return true;
  } else {
    return false;
  }
};
var maxVowels = function (s, k) {
  var l = 0,
    r = 0,
    max_vowels = 0,
    count = 0;
  while (r < s.length) {
    if (r - l + 1 > k) {
      if (is_vowel(s[l])) {
        count -= 1;
      }
      l += 1;
    }
    if (is_vowel(s[r])) {
      count += 1;
    }
    if (r - l + 1 == k) {
      if (count > max_vowels) {
        max_vowels = count;
      }
    }
    r += 1;
  }
  return max_vowels;
};
