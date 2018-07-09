// Array Partition I
// Given an array of 2n integers, your task is to group these integers into n pairs of integer,
// say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as
// large as possible.

var arrayPairSum = function(nums) {
  nums = nums.sort((a, b) => a - b)), (l = nums.length));
  var myset = [];

  for (let i = 0; i < l; i += 2) {
    myset.push([nums[i], nums[i + 1]]);
  }

  return myset
    .map(item => Math.min(item[0], item[1]))
    .reduce((pre, curr) => pre + curr, 0);
};

console.log(arrayPairSum([1, 4, 3, 2, 6, 8]));
