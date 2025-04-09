/**
 * time complexity--O(m2)
 * space complexity--O(n)
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  var i = 0,
    m = s2.length,
    n = s1.length;
  while (i < m) {
    var j = i,
      hm = new Map();
    var k = 0;
    while (k < n) {
      hm.set(s1[k], (hm.get(s1[k]) || 0) + 1);
      k += 1;
    }

    while (j < m) {
      if (hm.get(s2[j]) > 0) {
        hm.set(s2[j], hm.get(s2[j]) - 1);
        if (hm.get(s2[j]) == 0) {
          hm.delete(s2[j]);
        }
      } else {
        break;
      }
      if (hm.size == 0) {
        return true;
      }
      j += 1;
    }
    i += 1;
  }
  return false;
};

/**
 * this problem can  be solved by sliding window pattern--O(m*26)
 * space complexity--O(26+26)--O(1)
 * idea
 * -----------
 * we will take frequency array for s1 and window frequency array
 * for s2  and we will compare both if they are equal then we got our
 * answer
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var isMatched = (s1_count, s2_count) => {
  var i = 0;
  while (i < 26) {
    if (s1_count[i] != s2_count[i]) {
      return false;
    }
    i += 1;
  }
  return true;
};
var checkInclusion = function (s1, s2) {
  var i = 0;
  var s1_count = Array(26).fill(0),
    s2_count = Array(26).fill(0);
  var m = s2.length,
    n = s1.length;
  if (m < n) {
    return false;
  }
  while (i < n) {
    s1_count[s1.charCodeAt(i) - 97] += 1;
    s2_count[s2.charCodeAt(i) - 97] += 1;
    i += 1;
  }

  if (isMatched(s1_count, s2_count)) {
    return true;
  }

  var l = 0,
    r = n;
  while (r < m) {
    s2_count[s2.charCodeAt(l) - 97] -= 1;
    l += 1;
    s2_count[s2.charCodeAt(r) - 97] += 1;
    if (isMatched(s1_count, s2_count)) {
      return true;
    }
    r += 1;
  }
  return false;
};
