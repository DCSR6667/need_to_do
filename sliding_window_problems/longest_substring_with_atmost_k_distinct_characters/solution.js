// brute force approach--O(n2)
// space complexity--O(k);
const soln1 = (s, k) => {
  var i = 0,
    longest = 0;
  var hs = new Set();
  while (i < s.length) {
    var j = 0;
    while (j < s.length) {
      if (!hs.has(s[j])) {
        hs.add(s[j]);
      }
      if (hs.size > k) {
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

// this problem can be solved by sliding window pattern---O(n+n)
// space complexity--O(k);

const solution2 = (s, k) => {
  var l = 0,
    r = 0,
    max_length = 0;
  var m = new Map();
  while (r < s.length) {
    if (m.has(s[r])) {
      m.set(s[r], m.get(s[r]) + 1);
    } else {
      m.set(s[r], 1);
    }

    while (m.size > k) {
      m.set(s[l], m.get(s[l]) - 1);
      if (m.get(s[l]) == 0) {
        m.delete(s[l]);
      }
      l += 1;
    }

    if (r - l + 1 > max_length) {
      max_length = r - l + 1;
    }
    r += 1;
  }
  return max_length;
};

// this problem can be solved by sliding window pattern---O(n)
// space complexity--O(k);
const solution3 = (s, k) => {
  var l = 0,
    r = 0,
    max_length = 0;
  var m = new Map();
  while (r < s.length) {
    if (m.has(s[r])) {
      m.set(s[r], m.get(s[r]) + 1);
    } else {
      m.set(s[r], 1);
    }

    if (m.size > k) {
      m.set(s[l], m.get(s[l]) - 1);
      if (m.get(s[l]) == 0) {
        m.delete(s[l]);
      }
      l += 1;
    }

    if (m.size <= k) {
      if (r - l + 1 > max_length) {
        max_length = r - l + 1;
      }
    }

    r += 1;
  }

  return max_length;
};

s = "aaabbccd";
k = 2;
console.log(solution3(s, k));
