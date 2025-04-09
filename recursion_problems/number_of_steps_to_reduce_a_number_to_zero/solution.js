/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  var count = 0;
  while (num > 0) {
    count += 1;
    if (num % 2 == 0) {
      num = Math.floor(num / 2);
    } else {
      num = num - 1;
    }
  }
  return count;
};

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  var count = 0,
    res;
  if (num == 0) {
    return 0;
  }
  if (num % 2 == 0) {
    count = 1;
    res = numberOfSteps(Math.floor(num / 2));
    return count + res;
  } else {
    count = 1;
    res = numberOfSteps(num - 1);
    return count + res;
  }
};
