/**
 * brute force approach---O(m*m)
 * space complexity--O(m)
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  var m = s.length,
    n = t.length,
    i = 0,
    min_length = Infinity,
    start_index,
    end_index;
  while (i < m) {
    var j = i,
      k = 0,
      count = 0;
    var hm = new Map();
    while (k < n) {
      hm.set(t[k], (hm.get(t[k]) || 0) + 1);
      k += 1;
    }

    while (j < m) {
      if (hm.get(s[j]) > 0) {
        count += 1;
      }
      hm.set(s[j], (hm.get(s[j]) || 0) - 1);
      if (count == n) {
        if (j - i + 1 < min_length) {
          min_length = j - i + 1;
          start_index = i;
          end_index = j;
        }
      }
      j += 1;
    }
    i += 1;
  }
  return s.slice(start_index, end_index + 1);
};

/**
 * this problem can be solved by sliding window pattern--O(m+m)
 * space complexity--O(m)
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  var m = s.length,
    n = t.length,
    l = 0,
    r = 0,
    min_length = Infinity,
    start_index,
    end_index,
    count = 0;
  var hm = new Map();
  var i = 0;
  while (i < n) {
    hm.set(t[i], (hm.get(t[i]) || 0) + 1);
    i += 1;
  }
  while (r < m) {
    if (hm.get(s[r]) > 0) {
      count += 1;
    }
    hm.set(s[r], (hm.get(s[r]) || 0) - 1);
    while (count == n) {
      if (r - l + 1 < min_length) {
        min_length = r - l + 1;
        start_index = l;
        end_index = r;
      }
      hm.set(s[l], hm.get(s[l]) + 1);
      if (hm.get(s[l]) > 0) {
        count -= 1;
      }
      l += 1;
    }
    r += 1;
  }

  return s.slice(start_index, end_index + 1);
};
