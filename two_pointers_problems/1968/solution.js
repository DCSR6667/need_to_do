/**
 * time complexity---O(nlogn+n)
 * space complexity---O(n)
 *
 * ele  is not equal to its  average of neighbours if and only if
 * if ele is greater than its neighbours or ele is smaller than its neighbours
 *
 * how we achieve this
 * sort the array  and use two pointers approach
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  var res = [];
  nums.sort((a, b) => a - b);
  var low = 0,
    high = nums.length - 1;
  while (low < high) {
    res.push(nums[low]);
    low += 1;

    res.push(nums[high]);
    high -= 1;
  }
  if (low == high) {
    res.push(nums[low]);
  }

  return res;
};
