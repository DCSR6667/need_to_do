/**
 * brute force approach---O(n2)
 * space complexity--O(1)
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  var i = 0,
    max_fruits = 0;
  while (i < fruits.length) {
    var j = i;
    var hs = new Set();
    while (j < fruits.length) {
      if (!hs.has(fruits[j])) {
        hs.add(fruits[j]);
      }
      if (hs.size > 2) {
        break;
      }
      if (j - i + 1 > max_fruits) {
        max_fruits = j - i + 1;
      }
      j += 1;
    }
    i += 1;
  }

  return max_fruits;
};

/**
 * this problem can be solved by sliding window pattern--O(n+n)
 * space complexity--O(1)
 * @param {number[]} fruits
 * @return {number}
 */

var totalFruit = function (fruits) {
  var l = 0,
    r = 0,
    max_fruits = 0;
  var hm = new Map();
  while (r < fruits.length) {
    if (hm.has(fruits[r])) {
      hm.set(fruits[r], hm.get(fruits[r]) + 1);
    } else {
      hm.set(fruits[r], 1);
    }

    while (hm.size > 2) {
      hm.set(fruits[l], hm.get(fruits[l]) - 1);
      if (hm.get(fruits[l]) == 0) {
        hm.delete(fruits[l]);
      }
      l = l + 1;
    }

    if (r - l + 1 > max_fruits) {
      max_fruits = r - l + 1;
    }
    r += 1;
  }
  return max_fruits;
};

/**
 *  this problem can be solved by sliding window pattern--O(n)
 * space complexity--O(1)
 * @param {number[]} fruits
 * @return {number}
 */

var totalFruit = function (fruits) {
  var l = 0,
    r = 0,
    max_fruits = 0;
  var hm = new Map();
  while (r < fruits.length) {
    if (hm.has(fruits[r])) {
      hm.set(fruits[r], hm.get(fruits[r]) + 1);
    } else {
      hm.set(fruits[r], 1);
    }

    if (hm.size > 2) {
      hm.set(fruits[l], hm.get(fruits[l]) - 1);
      if (hm.get(fruits[l]) == 0) {
        hm.delete(fruits[l]);
      }
      l = l + 1;
    }

    if (hm.size <= 2) {
      if (r - l + 1 > max_fruits) {
        max_fruits = r - l + 1;
      }
    }
    r += 1;
  }
  return max_fruits;
};
