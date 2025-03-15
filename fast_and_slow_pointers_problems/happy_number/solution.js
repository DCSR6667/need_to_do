/**
 * brute force approach--O(n)
 * space complexity--O(n)
 * @param {number} n
 * @return {boolean}
 */

const sum1 = (n) => {
  var s = 0;
  while (n > 0) {
    var rem = n % 10;
    s = s + rem * rem;
    n = Math.floor(n / 10);
  }
  return s;
};

var isHappy = function (n) {
  var s = new Set();
  while (n != 1) {
    n = sum1(n);
    if (!s.has(n)) {
      s.add(n);
    } else {
      return false;
    }
  }
  return true;
};

/**
 * this problem can be solved by fast and slow pointers--O(n)
 * space complexity--O(1)
 * @param {number} n
 * @return {boolean}
 */

var sum_of_squares = (n) => {
  var sum = 0,
    rem,
    q;
  while (n > 0) {
    rem = n % 10;
    sum = sum + rem * rem;
    n = Math.floor(n / 10);
  }
  return sum;
};

var isHappy = function (n) {
  var slow = n,
    fast = n;
  if (sum_of_squares(slow) == 1) {
    return true;
  }
  while (fast != 1) {
    slow = sum_of_squares(slow);
    fast = sum_of_squares(sum_of_squares(fast));
    if (slow == fast) {
      return false;
    }
  }
  return true;
};
